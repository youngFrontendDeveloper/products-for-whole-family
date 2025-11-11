import './ProductsPage.css';
import Card from 'antd/es/card/Card';
import {Button, Menu, Popconfirm, Typography,} from 'antd';
import {DeleteOutlined, HeartFilled, PlusOutlined,} from '@ant-design/icons';
import {Link, NavLink} from 'react-router-dom';
import {useEffect, useState} from "react";
import Error from "../../../components/Error/Error.tsx";
import Loader from "../../../components/Loader/Loader.tsx";
import {useAppDispatch, useAppSelector} from "../../../store/hooks.ts";
import {
    deleteProduct,
    fetchProducts,
    likeProduct,
} from "../productsSlice.ts";
import ProductsFilter from "../../../components/ProductsFilter/ProductsFilter.tsx";
import type {FilterType} from "../../../types.ts";

const menuItem = [
    {
        key: 'create-product',
        label: (
            <NavLink to="/create-product" rel="noopener noreferrer">
                Добавить новый товар
            </NavLink>
        ),
    },
]


export default function ProductsPage() {
    const [filter, setFilter] = useState<FilterType>('all');
    const {localProducts, status, error} = useAppSelector((state) => state.products);
    const [filteredProducts, setFilteredProducts] = useState(localProducts);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [openPopconfirmId, setOpenPopconfirmId] = useState<number | null>(null);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!localProducts) return;

        switch (filter) {
            case 'all':
                setFilteredProducts(localProducts);
                break;
            case 'favorite':
                setFilteredProducts(localProducts.filter(item => item.isLiked));
                break;
            default:
                setFilteredProducts(localProducts.filter(item => item.category === filter));
                break;
        }

    }, [filter, localProducts])

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const showPopconfirm = (productId: number) => {
        setOpenPopconfirmId(productId);
    };

    const handleOk = (productId: number) => {
        setConfirmLoading(true);
        dispatch(deleteProduct(productId))
        setTimeout(() => {
            setOpenPopconfirmId(null);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpenPopconfirmId(null);
    };

    const handleOpenMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const handleClickMenu = () => {
        setToggleMenu(false)
    }

    return (
        <section className="products">

            <Typography.Title className="products__title">
                С любовью - для вас
            </Typography.Title>

            <div className="products__menu-wrap">
                <Button
                    shape="circle"
                    icon={<PlusOutlined />}
                    onClick={handleOpenMenu}
                    className="products__menu-button"
                />
                <Menu
                    className="products__menu"
                    style={toggleMenu ? {display: "block"} : {display: "none"}}
                    onClick={handleClickMenu}
                    mode="inline"
                    items={menuItem}
                />
            </div>

            <ProductsFilter setFilter={setFilter} />

            <ul className="products__list">
                {status === 'loading' && <Loader />}
                {status === 'failed' && <Error><p>{error}</p></Error>}
                {
                    filteredProducts?.map(item => (
                        <Link
                            to={`/product/${item.id}`} className="products__link"
                            // onClick={() => dispatch(selectProduct(item))}
                        >
                            <Card
                                className="products__item"
                                key={item.id}
                                hoverable
                                cover={
                                    <img
                                        className="products__image"
                                        draggable={false}
                                        alt={item.title}
                                        src={item.image}
                                        loading="lazy"
                                    />
                                }
                                actions={[
                                    <a
                                        style={{height: "100%"}}
                                        key="like" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        dispatch(likeProduct(item.id))
                                    }}
                                    >
                                        <HeartFilled
                                            style={{color: item.isLiked ? "#ee43ac" : "#686868", fontSize: '20px',}}
                                        />
                                    </a>,

                                    <a
                                        key="delete" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    >
                                        <Popconfirm
                                            title="Удалить товар"
                                            description="Вы действительно хотите удалить этот товар?"
                                            open={openPopconfirmId === item.id}
                                            onConfirm={() => handleOk(item.id)}
                                            onCancel={handleCancel}
                                            okButtonProps={{loading: confirmLoading}}
                                            okText="Да"
                                            cancelText="Нет"
                                        >
                                            <Button
                                                danger
                                                icon={<DeleteOutlined />}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    showPopconfirm(item.id);
                                                }}
                                            />

                                        </Popconfirm>
                                    </a>,
                                ]}
                            >
                                <h3 className="products__title">{item.title}</h3>
                                <p className="products__description">{item.description}</p>
                                <p className="products__price">${item.price}</p>

                            </Card>
                        </Link>
                    ))
                }
            </ul>
        </section>
    );
}

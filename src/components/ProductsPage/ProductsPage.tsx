import './ProductsPage.css';
import Card from 'antd/es/card/Card';
import {Button, Popconfirm, Typography, message,} from 'antd';
import {DeleteOutlined, LikeOutlined,} from '@ant-design/icons';
import type {PopconfirmProps} from 'antd';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import type {IProduct} from "../../types.ts";
import {useGetProductsQuery} from "../../redux/api/products/productsApi.ts";
import Error from "../Error/Error.tsx";
import Loader from "../Loader/Loader.tsx";

// const products =[
//   {
//     id: 1,
//     title:"Sberbank",
//       description: 1335987412358749,
//     src: "card-1.jpeg",
// },
// {
//     id: 2,
//     title:"Alfa-bank",
//     description: 3258145732596854,
//     src: "card-2.jpeg",
// },
// {
//     id: 3,
//     title:"VTB",
//        description: 9654125003285472,
//     src: "card-3.jpeg",
// },
// ]

// const confirm: PopconfirmProps['onConfirm'] = (e) => {
//     console.log(e);
//     message.success('Click on Yes');
// };
//
// const cancel: PopconfirmProps['onCancel'] = (e) => {
//     console.log(e);
//     message.error('Click on No');
// };

export default function ProductsPage() {
    // const [skip, setSkip] = useState(0);
    const {data, isError, isLoading} = useGetProductsQuery();
    const [products, setProducts] = useState<IProduct[]>(data || []);
    const [openPopconfirmId, setOpenPopconfirmId] = useState<number | null>(null);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showPopconfirm = (productId: number) => {
        setOpenPopconfirmId(productId);
    };

    const handleOk = (productId: number) => {
        setConfirmLoading(true);

        setTimeout(() => {
            setOpenPopconfirmId(null);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpenPopconfirmId(null);
    };

    console.log("data: ", data)
    useEffect(() => {
        if (data) {
            setProducts((prevProducts) => [...prevProducts, ...data]);
        }
    }, [data])

    return (
        <section className="products">

            <Typography.Title>
                С любовью - для вас
            </Typography.Title>

            <ul className="products__list">
                {isLoading && <Loader />}
                {isError && <Error><p>Ошибка загрузки товаров</p></Error>}
                {
                    products?.map(item => (
                        <Link to={`/product/${item.id}`} className="products__link">
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
                                        // src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                                    />
                                }
                                actions={[
                                    <a
                                        key="like" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        // Ваша логика для лайка
                                    }}
                                    >
                                        <LikeOutlined />
                                    </a>,

                                    <a
                                        key="delete" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        // Ваша логика для лайка
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

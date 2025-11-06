import './Navigation.css';
import {Button, Drawer, Menu,} from 'antd';
import type {MenuProps} from 'antd';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons';
import {useWindowSize} from "../../hooks/useWindowSize.ts";


export default function Navigation() {
    const [current, setCurrent] = useState('mail');
    // const [shouMenu, setShouMenu] = useState(false);
    const {width} = useWindowSize();
    //
    // useEffect(() => {
    //     if (width && width >= 768) {
    //         setShouMenu(true)
    //     }
    // }, [width])
    //
    // const handleClick = () => {
    //     setShouMenu(!shouMenu)
    // }
    //
    const onClick: MenuProps['onClick'] = (e) => {
        setOpen(false);
        setCurrent(e.key);
    };

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    type MenuItem = Required<MenuProps>['items'][number];
    const items: MenuItem[] = [
        {
            label: (
                <NavLink to="/" rel="noopener noreferrer">
                    Домашняя
                </NavLink>
            ),
            key: 'home',
        },
        {
            label: (<NavLink to="/products" rel="noopener noreferrer">
                Продукты
            </NavLink>),
            key: '/products',

        },
    ];

    return (
        <nav className="navigation">
            {
                width && width < 768 ? (
                    <>
                        <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} />
                        <Drawer
                            // title="Закрыть"
                            closable={{'aria-label': 'Close Button'}}
                            onClose={onClose}
                            open={open}
                        >
                            <Menu
                                // style={shouMenu ? {transform: "translateX(0)"} : {transform: "translateX(120%)"}}
                                className="menu"
                                onClick={onClick}
                                selectedKeys={[current]}
                                mode="inline"
                                items={items}
                            />

                        </Drawer>
                    </>
                ) : (

                    <Menu
                        className="menu"
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="inline"
                        items={items}
                    />
                )
            }
            {/*<Menu*/}
            {/*    style={shouMenu ? {transform: "translateX(0)"} : {transform: "translateX(120%)"}}*/}
            {/*    className="menu"*/}
            {/*    onClick={onClick}*/}
            {/*    selectedKeys={[current]}*/}
            {/*    mode="inline"*/}
            {/*    items={items}*/}
            {/*/>*/}

            {/*<Button*/}
            {/*    onClick={handleClick}*/}
            {/*    className="burger"*/}
            {/*    type="primary"*/}
            {/*    shape="circle"*/}
            {/*    icon={<MenuOutlined />}*/}
            {/*/>*/}

        </nav>
    );
};
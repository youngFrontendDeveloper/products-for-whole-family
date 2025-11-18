import './Navigation.css';
import {Button, Drawer, Menu,} from 'antd';
import type {MenuProps} from 'antd';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons';
import {useWindowSize} from "../../hooks/useWindowSize.ts";

export default function Navigation() {
    const [current, setCurrent] = useState('home');
    const {width} = useWindowSize();
    const [open, setOpen] = useState(false);
    type MenuItem = Required<MenuProps>['items'][number];
    const items: MenuItem[] = [
        {
            label: (
                <NavLink to="/" rel="noopener noreferrer">
                    Главная
                </NavLink>
            ),
            key: 'home',
        },
        {
            label: (
                <NavLink to="/products" rel="noopener noreferrer">
                    Продукты
                </NavLink>),
            key: 'products',
        },
    ];

    console.log(current)

    const onClick: MenuProps['onClick'] = (e) => {
        setOpen(false);
        setCurrent(e.key);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav className="navigation">
            {
                width && width < 768 ? (
                    <>
                        <Button type="primary" shape="circle" onClick={showDrawer} icon={<MenuOutlined />} />

                        <Drawer
                            closable={{'aria-label': 'Close Button'}}
                            onClose={onClose}
                            open={open}
                        >
                            <Menu
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

        </nav>
    );
};
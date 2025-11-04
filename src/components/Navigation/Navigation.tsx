import './Navigation.css';
import { Button, Menu, Tooltip } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';



export default function Navigation () {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
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
      label: ( <NavLink to="/products" rel="noopener noreferrer">
      Продукты
    </NavLink>),
      key: '/products',     
      
    },
    // {
    //   label: 'Контакты',
    //   key: 'contacts',    
    //       },    
  ];

  const menuStyle={ 
    display: 'flex', 
    width: 300,
    backgroundColor: 'transparent'
  }

  return (
      <nav className="navigation">
        <Menu 
         style={menuStyle}
        onClick={onClick} 
        selectedKeys={[current]} 
        mode="inline" 
        items={items} 
        />
        {/* <Tooltip title="Меню"> */}
          <Button type="primary" shape="circle" icon={<MenuOutlined />} />
        {/* </Tooltip> */}
        
        {/* <BurgerMenu /> */}
      </nav>
  );
};
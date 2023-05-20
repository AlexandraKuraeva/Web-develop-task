import React, { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Menu/menu.module.scss';

import './menu.scss';
interface MenuItem {
  title: string;
  icon: string;
  route: string;
}

interface MenuProps {
  items: MenuItem[];
}
const Menu = ({ items }) => {
  console.log('render menu');

  return (
    <ul className={styles.menu}>
      {items.map((item,) => (
        <li className='menu__item' key={item.title}>
          <NavLink  to={item.route}>
            <span>
              <img src={item.icon} alt="навигация" />
            </span>{' '}
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

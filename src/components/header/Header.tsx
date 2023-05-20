import { FC } from 'react';
import Menu from '../Menu/Menu';
import { RouteNames } from '../../routes';

import styles from './header.module.scss';
import arrow from '../../assets/img/arrow.svg';
import statistics from '../../assets/img/statistics.svg';
import receipt from '../../assets/img/Receipt.svg';
import calculate from '../../assets/img/Calculate.svg';
import menu from '../../assets/img/menu.svg';
import location from '../../assets/img/location.svg';
import time from '../../assets/img/time.svg';
import list from '../../assets/img/list.svg';
import friends from '../../assets/img/friends.svg';
import photo from '../../assets/img/photo.svg';
import set from '../../assets/img/set.svg';


interface MenuItem {
  title: string;
  icon: string;
  route: string;
}

const Header: FC = () => {
  const items: MenuItem[] = [
    { title: 'Activity', icon: menu, route: RouteNames.PROFILE },
    { title: 'Map', icon: location, route: RouteNames.MAP },
    { title: 'Timer', icon: time, route: RouteNames.TIMER },
    { title: 'Notes', icon: list, route: '/y' },
    { title: 'Friends', icon: friends, route: '/y' },
    { title: 'Photos', icon: photo, route: '/y' },
    { title: '', icon: set, route: '/y' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <a href="#">
                <img src={arrow} alt="назад" />
              </a>
              <p className={styles.title}>
                <span>User pages</span> - Profile
              </p>
            </div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src={statistics} alt="статистика" /> <a href="#">Statistics</a>{' '}
              </li>

              <li className={styles.item}>
                <img src={calculate} alt="расчет" /> <a href="#">Invoices</a>{' '}
              </li>
              <li className={styles.item}>
                <img src={receipt} alt="чек" /> <a href="#">Schedule</a>{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <nav className={styles.wrapper}>
            <Menu items={items} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <Link to={RouteNames.MAP}>карта</Link>

          <Link to={RouteNames.PROFILE}>профиль</Link> */
}

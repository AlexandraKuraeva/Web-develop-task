import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import prof from '../../assets/img/profile/profile.svg';
import balance from '../../assets/img/profile/balanse.svg';
// import con from '../../assets/img/con.svg';
import friends from '../../assets/img/profile/friends.svg';
import events from '../../assets/img/profile/events.svg';
import set from '../../assets/img/profile/set.svg';
import arrow from '../../assets/img/profile/arrow.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handlerClick=()=>{
	setIsOpen(!isOpen)
  }
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.title}>Navigation</div>
        <span className={isOpen ? styles.open : styles.img} onClick={() => handlerClick()}>
          <img src={arrow} alt="стрелка" />
        </span>
      </div>
      <div className={styles.wrapper}>
        {isOpen && (
          <div className={styles.content}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#">
                  <img src={prof} alt="icon" /> My profile
                </a>
              </li>
              <li className={styles.item}>
                <a href="#">
                  <img src={balance} alt="icon" /> Balance
                </a>
                <span className={styles.sum}>$ 1,430</span>
              </li>
              <li className={styles.item}>
                <a href="#">
                  <img src={friends} alt="icon" /> Connections
                </a>
                <span className={styles.counter_red}>29</span>
              </li>
              <li className={styles.item}>
                <a href="#">
                  <img src={friends} alt="icon" /> Friends
                </a>
              </li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#">
                  <img src={events} alt="icon" /> Events
                </a>
                <span className={styles.counter_grin}>45</span>
              </li>
              <li className={styles.item}>
                <a href="#">
                  <img src={set} alt="icon" /> Account settings
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;

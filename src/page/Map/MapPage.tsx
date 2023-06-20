import { useState } from 'react';
import all from '../All.module.scss';
import styles from './Map.module.scss';
import arrow from '../../assets/img/profile/arrow_up.svg';
import revers from '../../assets/img/map/revers.svg';
import close from '../../assets/img/map/close.svg';
import MyMap from '../../components/map/Map';

const MapPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handlerClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={all.content}>
      <div className={styles.top}>
        <h3 className={styles.title}>Basic map</h3>
        <div className={styles.right}>
          <span className={isOpen ? styles.open : styles.img} onClick={() => handlerClick()}>
            <img src={arrow} alt="открыть" />
          </span>
          <span>
            <img src={revers} alt="перезагрузка" />
          </span>
          <span>
            <img src={close} alt="закрыть" />
          </span>
        </div>
      </div>
      {isOpen && (
        <div id="map" className={styles.map}>
          <MyMap />
        </div>
      )}
    </div>
  );
};

export default MapPage;

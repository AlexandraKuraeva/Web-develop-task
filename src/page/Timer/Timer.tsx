import { useState, useContext } from 'react';
import { TimerContext } from '../../context/TimerProvider';
import all from '../All.module.scss';
import styles from './Timer.module.scss';
import arrow from '../../assets/img/profile/arrow_up.svg';
import revers from '../../assets/img/map/revers.svg';
import close from '../../assets/img/map/close.svg';

const Timer = () => {
  const { seconds, formatTime } = useContext(TimerContext);
  const [isOpen, setIsOpen] = useState(true);
  const handlerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={all.content}>
      <div className={styles.top}>
        <h3 className={styles.title}>Timer</h3>
        <div className={styles.right}>
          <span className={isOpen ? styles.open : styles.img} onClick={handlerClick}>
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
      {isOpen && <div className={styles.timer}>{formatTime(seconds)}</div>}
    </div>
  );
};

export default Timer;

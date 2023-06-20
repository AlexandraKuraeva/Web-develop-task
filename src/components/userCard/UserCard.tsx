import styles from './UserCard.module.scss';
import avatar from '../../assets/img/Avatar.jpg';
import telega from '../../assets/img/telega.svg';
import hh from '../../assets/img/hh.svg';
import twit from '../../assets/img/twit.svg';

const UserCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.avatar}>
          <img src={avatar} alt="фото пользователя" />
        </div>

        <div className={styles.name}>Hanna Dorman</div>
        <div className={styles.profession}>UX/UI designer</div>
        <ul className={styles.icon}>
          <li>
            <a href="#">
              <img src={telega} alt="telegram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={hh} alt="hh" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twit} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;

import { useState } from 'react';
import styles from './ShareThoughts.module.scss';
import arrow from '../../assets/img/profile/arrow.svg';
const ShareThoughts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handlerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.title}>Share your thoughts</div>
        <span className={isOpen ? styles.open : styles.img} onClick={() => handlerClick()}>
          <img src={arrow} alt="стрелка" />
        </span>
      </div>
      <div className={styles.wrapper}>
        {isOpen && (
          <div className={styles.content}>
				
            <textarea className={styles.input}  placeholder="Enter your message..." />
            <button  type='submit' className={styles.button} >Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareThoughts;

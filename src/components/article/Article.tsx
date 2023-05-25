import React, { useState } from 'react';
import styles from './Article.module.scss';
import time from '../../assets/img/profile/time.svg';
import arrow from '../../assets/img/profile/arrow_up.svg';
import comm from '../../assets/img/profile/comm.svg';
import eye from '../../assets/img/profile/eye.svg';

interface Comments {
  id: number;
  author: string;
  text: string;

  timestamp: string;
}
interface Article {
  id: number;
  title: string;
  img: string;
  comments: Comments[];
}

const Article: React.FC<Article> = ({ id, title, img, comments }) => {
	
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className={styles.item} key={id}>
      <div className={styles.item__top}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.item__right}>
          <div className={styles.timeStamp}>
            <span>
              <img src={time} alt="время" />
              49 minutes ago
            </span>
          </div>
          <span className={isOpen ? styles.open : styles.img} onClick={() => handlerClick()}>
            <img src={arrow} alt="открыть" />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.item__content}>
          <img src={img} alt="контентное изображение" className={styles.item__img} />
          <ul className={styles.comments}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.comment}>
                <p className={styles.comment__author}>
                  <img src={comm} alt="комментарий" />
                  <a href="#"> {comment.author} </a>
                  commented:
                </p>
                <div className={styles.comment__inner}>
                  <p className={styles.comment__text}>{comment.text}</p>
                  <span>
                    - {comment.author.split(' ')[0]},{comment.timestamp}{' '}
                  </span>
                </div>
                <div className={styles.footer}>
                  <span className={styles.footer__elem}>
                    <img src={eye} alt="количество просмотров" />
                    432
                  </span>
                  <span className={styles.footer__elem}>
                    <img src={comm} alt="количество комментариев" />
                    47
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Article;

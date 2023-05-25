import styles from './ContentProfile.module.scss';

import Article from '../article/Article';
import { articles } from '../../assets/Articles';

const ContentProfile = () => {
	console.log('ContentProfile');
  
  return (
    <ul className={styles.list}>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </ul>
  );
};

export default ContentProfile;

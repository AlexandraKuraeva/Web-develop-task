
import styles from './ContentProfile.module.scss';

import Article from '../article/Article';

const ContentProfile = () => {
  const articles = [
    {
      id: 0,
      title: 'Sunshine',
      img: 'https://img.milli.az/2017/04/16/535550_15.jpg',
      comments: [
        {
          id: 0,
          author: 'Jason Anderson',
          text: 'Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. ',
          timestamp: '10:30 am',
        },
        {
          id: 1,
          author: 'Roos Git',
          text: 'Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. ',
          timestamp: '11:30 am',
        },
      ],
    },
    {
      id: 1,
      title: 'Sunset Sunset Sunset',
      img: 'https://wallpapercrafter.com/sizes/1366x768/234244-quino-quinoal-mlaga-and-playa-dela-misericordium-h.jpg',
      comments: [
        { id: 0, author: 'Anna Root', text: 'lervrververvevrerbreerbreb', timestamp: '20:30 am' },
      ],
    },
  ];
  return (
    <ul className={styles.list}>
      {articles.map((article) => (
        <Article
          id={article.id}
          title={article.title}
          img={article.img}
          comments={article.comments}
        />
      ))}
    </ul>
  );
};

export default ContentProfile;

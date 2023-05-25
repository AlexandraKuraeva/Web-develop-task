import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
export const articles = [
  {
    id: 0,
    title: 'Sunshine',
    img: img1,
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
    img: img2,
    comments: [
      {
        id: 0,
        author: 'Anna Root',
        text: 'Touch the sun, and immerse in the sea. Keep love in your heart.',
        timestamp: '20:30 am',
      },
    ],
  },
];

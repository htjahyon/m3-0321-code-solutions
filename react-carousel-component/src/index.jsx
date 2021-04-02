import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';

const pictures = [
  {
    id: 0,
    url: '../dragonball_z/super_gohan.png'
  },
  {
    id: 1,
    url: '../dragonball_z/goku.png'
  },
  {
    id: 2,
    url: '../dragonball_z/vegeta.png'
  },
  {
    id: 3,
    url: '../dragonball_z/piccolo.png'
  },
  {
    id: 4,
    url: '../dragonball_z/krillin.png'
  }
];

ReactDOM.render(
  <Carousel
    pictures={pictures}
   />,
  document.querySelector('#root')
);

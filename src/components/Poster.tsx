import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import { Movie } from '../data/mock';

import './Poster.css';

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className="relative transition-all 
            duration-500 ease-in-out transform hover:scale-110"
    key={index}
  >
    <img src={cover} alt={title} />
    <div
      className="poster absolute inset-0 grid place-items-center w-full h-full bg-black bg-opacity-75 transition-all 
            duration-500 ease-in-out opacity-0"
    >
      <FontAwesomeIcon icon={faPlayCircle} size="5x" />
      <h2 className="text-2xl">{title}</h2>
    </div>
  </article>
);

export default Poster;

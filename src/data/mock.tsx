import cover1 from '../assets/cover1.jpg';
import cover2 from '../assets/cover2.jpg';
import cover3 from '../assets/cover3.jpg';

export interface Movie {
  title: string;
  cover: string;
  score?: number | string;
}

const mockData: Movie[] = [
  {
    title: 'Avengers',
    cover: cover1,
  },
  {
    title: 'Missão Impossível',
    cover: cover2,
  },
  {
    title: 'Mega Tubarão',
    cover: cover3,
  },
  {
    title: 'Avengers',
    cover: cover1,
  },
  {
    title: 'Missão Impossível',
    cover: cover2,
  },
  {
    title: 'Mega Tubarão',
    cover: cover3,
  },
  {
    title: 'Avengers',
    cover: cover1,
  },
  {
    title: 'Missão Impossível',
    cover: cover2,
  },
  {
    title: 'Mega Tubarão',
    cover: cover3,
  },
  {
    title: 'Avengers',
    cover: cover1,
  },
  {
    title: 'Missão Impossível',
    cover: cover2,
  },
  {
    title: 'Mega Tubarão',
    cover: cover3,
  },
];

export default mockData;

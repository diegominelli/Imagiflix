import React, { useState, useEffect } from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=1e3d3529de8649deba42e604199b2017&language=pt-BR&sort_by=popularity.desc'
      );

      const data = await response.json();

      setMovies(data);
    };

    fetchData();
  }, []);

  useEffect(() => movies && console.log(movies), [movies]);

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default App;

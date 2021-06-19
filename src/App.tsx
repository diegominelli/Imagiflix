import React from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero />
      <NavBar />
    </div>
  );
};

export default App;

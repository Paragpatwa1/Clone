import React from 'react';
import herosection from './hero section.png';

const HeroSection = () => {
  return (
    <div className="container-fluid p-0">
      <div className="text-center">
        <img 
          src={herosection} 
          alt="Hero Section" 
          className="img-fluid w-100" 
        />
      </div>
    </div>
  );
};

export default HeroSection;

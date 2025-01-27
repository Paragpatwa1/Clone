import React from 'react';
import animated from './animated counter.png';

const HeroSubSection = () => {
  return (
    <div className="container text-center ">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <img 
            src={animated} 
            alt="animated" 
            className="img-fluid heroSection rounded" 
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSubSection;

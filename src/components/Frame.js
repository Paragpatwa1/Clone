import React from 'react';
import FrameImg from './Frame1.png';
import ServiceSection from './Servicesection.png';

const Frame = () => {
  return (
    <div className="container">
      {/* Frame Image */}
      <div className="text-center mb-4">
        <img 
          src={FrameImg} 
          alt="Frame" 
          className="img-fluid rounded shadow" 
        />
      </div>

      {/* Service Section */}
      <div className="text-center">
        <img 
          src={ServiceSection} 
          alt="Service Section" 
          className="img-fluid rounded shadow" 
        />
      </div>
    </div>
  );
};

export default Frame;

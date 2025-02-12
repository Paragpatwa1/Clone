import React from 'react';
import AboutSection from './AboutSection.png';
import smallbanner from './Smallbanner.png';

const About = () => {
  return (
    <div className="container ">
      {/* About Section */}
      <div className="text-center">
        <img 
          src={AboutSection} 
          alt="About Section" 
          className="img-fluid rounded shadow" 
        />
      </div>

      {/* Small Banner */}
      <div className="text-center">
        <img 
          src={smallbanner} 
          alt="Small Banner" 
          className="img-fluid rounded shadow" 
        />
      </div>
    </div>
  );
};

export default About;

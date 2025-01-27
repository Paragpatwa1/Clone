import React from 'react';
import NavbarImg from './Navbarsection.png';

const Header = () => {
  return (
    <div className="container-fluid ">
      <div className="text-center">
        <img 
          src={NavbarImg} 
          alt="Navbar" 
          className="img-fluid" 
        />
      </div>
    </div>
  );
};

export default Header;

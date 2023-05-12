import Logo from '../../assets/logo.png'
import React from 'react';
import './style.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt='ConstruTech Solutions' />
      </div>
      <nav className="navigation">
        <ul> 
          <li><a href="#">Mission</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import Logo from '../../assets/logo.png'
import React from 'react';
import './style.css'
import { Outlet, Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt='ConstruTech Solutions' />
      </div>
      <nav className="navigation">
        <ul> 
          <li><Link to='/mission' >Mission</Link></li>
          <li><Link to='/services' >Services</Link></li>
          <li><Link to='/pricing' >Pricing</Link></li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;

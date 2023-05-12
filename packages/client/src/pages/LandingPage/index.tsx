import React from 'react';
import './styles.css';

import LoginScreen from '../login';
import Header from '../../components/Header';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Header/>
      <div className="overlay">
        <div className="overlay-layout">
          <div className="left-side-panel">
            <h1>Welcome To #1 Global Booking Center</h1>
            <p>Discover upcoming and porpular musicians in the world...<br/> we promise nothing but the best experience</p>
          </div>
          <LoginScreen/>
        </div>
       
      </div>
      <footer className="moving-footer">
        <div className="moving-content">
          <p><b>Support Contact:</b> (+27 72) 9632594.</p>
          <p><b>Support Email Address: </b>samassango@gmail.com.</p>
          <p>We promise nothing but great experience. We are on the same team.</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;

import React from 'react';
import './styles.css';

import LoginScreen from '../login';
import AppLayout from '../../containers/AppLayout';

const LandingPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="landing-page">
        <div className="overlay">
          <div className="overlay-layout">
            <div className="left-side-panel">
              <h1>Welcome To #1 Global Booking Center</h1>
              <p>Discover upcoming and porpular musicians in the world...<br/> we promise nothing but the best experience</p>
            </div>
            <LoginScreen/>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default LandingPage;

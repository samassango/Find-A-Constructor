import React from 'react';
import './styles.css';

import LoginScreen from '../login';
import AppLayout from '../../containers/AppLayout';
import { useForm } from 'react-hook-form';

const LandingPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSignInHandler=(data:any)=>{
    console.log(data);
  }
  return (
    <AppLayout>
      <div className="landing-page">
        <div className="overlay">
          <div className="overlay-layout">
            <div className="left-side-panel">
              <h1>Welcome To #1 Global Booking Center</h1>
              <p>Discover upcoming and porpular musicians in the world...<br/> we promise nothing but the best experience</p>
            </div>
            <LoginScreen register={register} handleSubmit={handleSubmit} errors={errors} onSubmitHandlerResponse={onSignInHandler}/>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default LandingPage;

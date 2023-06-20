import React from 'react';

import './style.css'
import { IFormProps } from '../../types/types';

const SignupForm: React.FC<IFormProps> = ({register,handleSubmit, errors, onSubmitHandlerResponse}) => {

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmitHandlerResponse)}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register('email', { required: true })}/>
            {errors.email && <p>Email is required.</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register('password', { required: true })}/>
            {errors.password && <p>Password is required.</p>}
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" {...register('confirmPassword', { required: true })} />
            {errors.confirmPassword && <p>Confirm password is required.</p>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="welcome-message">
        <img src="path/to/entertainment-picture.jpg" alt="Entertainment" />
        <h3>Welcome to our platform!</h3>
        <p>Discover endless entertainment options.</p>
      </div>
    </div>
  );
};

export default SignupForm;

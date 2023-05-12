import React from 'react';
import './style.css'
const SignupForm: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Create an Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" />
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

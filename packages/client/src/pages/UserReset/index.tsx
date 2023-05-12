import React from 'react';
import './style.css'
const PasswordResetForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="password-reset-form">
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordResetForm;

import React from 'react';
import './style.css'
import { IFormProps } from '../../types/types';
const PasswordResetForm: React.FC<IFormProps> = ({register,handleSubmit, errors, onSubmitHandlerResponse}) => {
  return (
    <div className="password-reset-form">
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit(onSubmitHandlerResponse)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email', { required: true })}/>
          {errors.email && <p>Email is required.</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordResetForm;

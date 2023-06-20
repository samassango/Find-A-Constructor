import React from 'react';

import './style.css';
import { IFormProps } from '../../types/types';

const LoginScreen: React.FC<IFormProps> = ({register,handleSubmit,errors, onSubmitHandlerResponse}) => {

  return (
    <div className="login-screen">
      <div className="login-form">
        <h2>Login</h2>
        <form className="input-form" onSubmit={handleSubmit(onSubmitHandlerResponse)}>
          <input type="text" className="input" placeholder="Username" {...register('username', { required: true })} />
          {errors.username && <p>Username/email is required.</p>}
          <input type="password" className="input"  placeholder="Password" {...register('password', { required: true })} />
          {errors.password && <p>Password is required.</p>}
          <button type="submit">Login</button>
        </form>
         <div className="links">
            <a href="/register">Register</a>
            <a href="/user-reset">Forgot Password</a>
        </div>
      </div>
     
    </div>
  );
};

export default LoginScreen;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './actions/authAction';
import { useNavigate } from 'react-router-dom';
import './App.css'


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    if (auth.isAuthenticated) {
      navigate('/home');
    }
  };

  return (
    <div className='login-container'>
    <form onSubmit={handleSubmit} className='Loginpage'>
    <h3>Login Page</h3>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </form>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from './actions/authAction';
import {  useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', mobile: '', dob: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
    if(form.password===form.confirmPassword){
        alert('SignUp completed')
        navigate('/login');
    }
    else{
        alert('Password should same')
    }
    
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
        <h3>SignUp Page</h3>
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
      <input type="text" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" required />
      <input type="date" name="dob" value={form.dob} onChange={handleChange} placeholder="Date of Birth" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;

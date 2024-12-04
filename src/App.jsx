import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
import LoginForm from './LoginForm';
import SignupForm from './SignupFrom';
import HomePage from './HomePage';
import PrivateRoute from './PrivateRoute';
import Home from './Dashboard';

const App = () => {
  return (
    
    <Router> 
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/signup" element={<SignupForm />} />
         <Route path="/home" element={ <PrivateRoute> <HomePage /> </PrivateRoute> } />
          </Routes>
       </Router>
  );
};

export default App;

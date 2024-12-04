import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <h1>User Details</h1>
      {user && (
        <div className="card">
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <p>DOB: {user.dob}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;

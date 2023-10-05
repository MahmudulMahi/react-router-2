import React from 'react';
import { NavLink } from 'react-router-dom';

const Left = () => {
  return (
    <div className='font-bold space-y-3'>
         <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Register</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    </div>
  );
};

export default Left;
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
    <h2 className="text-3xl my-10 text-center">Please Login</h2>
    <form  className="lg:w-1/2 md:w-3/4 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary"> <Link to='/'>Login</Link></button>
      </div>
    </form>
    <p className="text-center">Dont have an account <Link to='/' className="text-blue-400">Register</Link></p>
  </div>
  );
};

export default Login;
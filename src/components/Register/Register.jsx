import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form>
        <h3 className="text-center">Sign Up</h3>
        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter UserName"
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid mb-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="text-right">
          Already have an account?
          <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useEffect } from "react";

import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { loginSchema } from "../schemas";
// import { clearSomeState, login } from "../redux/features/UserSlice";
import { toast } from "react-toastify";


const login = () => {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <form>
          <h3 className="text-center">Sign In</h3>
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
          <p className="text-right">Not a registered user?
          <Link to="/Sign-up">Register</Link>
          </p>
        </form>
      </div>
    );
};

export default login;

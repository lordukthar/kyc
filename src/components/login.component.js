import React, { Component } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {checkUserLogin} from '../utils/Login'


 const Login = () =>  {

    let navigate = useNavigate();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/landing" } };


    let login = async () => {
        checkUserLogin(document.getElementById("email").value)
        navigate(from);
  };

   
        return (
            <div>
                
                    <div className="inner">

            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input id="email" type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={login}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>  </div> 
            
            );
    
}

export default Login;
import React from "react";
import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUp = () => {
    setIsSignUpMode(true);
  };

  const handleSignIn = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container-1 ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form form-login">
            <h2 className="title-login">Sign in</h2>
            <div className="input-field-login">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field-login">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
           
          </form>
          <form  action="#" className="sign-up-form  form-login">
            <h2 className="title-login">Sign up</h2>
            <div className="input-field-login">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field-login">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field-login">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
       
          </form>
        </div>
      </div>
{/* /////////////////////////////////////////////////////////////////// */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              What are you waiting for? JOIN US
            </p>
            <button className="btn transparent" onClick={handleSignUp}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignIn}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;

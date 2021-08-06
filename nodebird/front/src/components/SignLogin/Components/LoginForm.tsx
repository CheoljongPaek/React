import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SignLoginBox, LoginInputs, Title, InputGroup1, InputGroup2, FindPW } from '../styles';
import { Route } from 'react-router-dom';

const LoginForm = () => {

  return (
    <>      
      <div className="login-form">
        <div className="sign-in-htm">
          <InputGroup1 className="group">
            <label htmlFor="user" className="label">Username</label>
            <input id="user" type="text" className="input" />
          </InputGroup1>
          <InputGroup1 className="group">
            <label htmlFor="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password" />
          </InputGroup1>
          <InputGroup2 className="group">
            <input id="check" type="checkbox" className="check" />
            <label htmlFor="check">
              <span className="icon" />
              Keep me Logged in
            </label>
          </InputGroup2>
          <InputGroup1 className="group">
            <input type="submit" className="button" value="LogIn" />
          </InputGroup1>
          <div className="hr"></div>
          <FindPW className="foot-lnk">
            <a href="#forgot">Forgot Password?</a>
          </FindPW>
        </div>
      </div>
    </>
  )
};

export default LoginForm;
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SignLoginBox, LoginInputs, Title, InputGroup1, InputGroup2, FindPW } from '../styles';
import { Route } from 'react-router-dom';
import { useCallback } from 'react';

const LoginForm = () => {
  console.log('LoginForm');
  // const [email, ]
  const onSubmit = useCallback(() => {

  }, []);
  return (
    <>      
      <div className="login-form">
        <div className="sign-in-htm">
          <form onSubmit={onSubmit}>
            <InputGroup1 className="group">
              <label htmlFor="email" className="label">Email</label>
              <input id="email" type="text" className="input" />
            </InputGroup1>
            <InputGroup1 className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" autoComplete="on" className="input" data-type="password" />
            </InputGroup1>
            <InputGroup1 className="group">
              <button type="submit" className="button">LogIn</button>
            </InputGroup1>
            <div className="hr"></div>
            <FindPW className="findpwinlogin">
              <a href="#forgot">Forgot Password?</a>
            </FindPW>
          </form>
        </div>
      </div>
    </>
  )
};

export default LoginForm;
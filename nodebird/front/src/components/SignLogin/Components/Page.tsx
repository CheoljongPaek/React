import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SignLoginBox, LoginInputs, Title, InputGroup1, InputGroup2, FindPW } from '../styles';

const SignLoginPage = () => {

  return (
    <>
      <Container className="container">
        <Title className="title">Your Color</Title>
        <SignLoginBox className="login-wrap">
          <LoginInputs className="login-html">
            <Link to="/menu/signlogin/main">
              <div>Login</div>
            </Link>
            <Link to="/menu/signlogin/main">
              <div>Sign Up</div>
            </Link>
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
          </LoginInputs>
        </SignLoginBox>
      </Container>
    </>
  )
};

export default SignLoginPage;
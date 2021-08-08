import React, { useState } from 'react';
import { Link, Route, Switch, useLocation, useParams, NavLink } from 'react-router-dom';
import { Container, SignLoginBox, LoginInputs, Title, InputGroup1, InputGroup2, FindPW } from '../styles';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';

const SignupLogin = () => {

  return (
    <>
      <Container className="container">
        <Title className="title">Your Color</Title>
        <SignLoginBox className="login-wrap">
          <LoginInputs className="login-html">
            <NavLink to="/menu/signlogin/login" activeClassName="active">
              <div className="tologin">Login</div>
            </NavLink>
            <NavLink to="/menu/signlogin/signup" activeClassName="active">
              <div className="tosignup">Sign Up</div>
            </NavLink>
            <Switch>
              <Route exact path="/menu/signlogin/login" render={() => <LoginForm />} />
              <Route exact path="/menu/signlogin/signup" render={() => <SignupForm />}  />
            </Switch>
          </LoginInputs>
        </SignLoginBox>
      </Container>
    </>
  )
};
//최적화 memo
export default SignupLogin;
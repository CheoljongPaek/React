import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Container, SignLoginBox, LoginInputs, Title, InputGroup1, InputGroup2, FindPW } from './styles';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';

const LoginPage = () => {

  return (
    <>
      <Container className="container">
        <Title className="title">Your Color</Title>
        <SignLoginBox className="login-wrap">
          <LoginInputs className="login-html">
            <Link to="/menu/signlogin/main">
              <div>Login</div>
            </Link>
            <Link to="/menu/signlogin/signup">
              <div>Sign Up</div>
            </Link>
            <Switch>
              <Route exact path="/menu/signlogin/main" component={LoginForm} />
              <Route exact path="/menu/signlogin/signup" component={SignupForm} />
            </Switch>
          </LoginInputs>
        </SignLoginBox>
      </Container>
    </>
  )
};

export default LoginPage;
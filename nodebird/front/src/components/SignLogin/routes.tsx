import React from 'react';
import SignloginStyle from "@styles/global/signlogin";
import { Route, Switch, useLocation } from 'react-router';
import LoginPage from './Loginpage';
import SignUppage from './Signuppage';


const SignLogin = () => {

  return (
    <>
      <SignloginStyle/>
      <Switch>
        <Route path="/menu/signlogin/:hmm">
          <LoginPage />
        </Route>
        {/* <Route path="/menu/signlogin/signup">
          <SignUppage />
        </Route> */}
      </Switch>
    </>
  )
};

export default SignLogin
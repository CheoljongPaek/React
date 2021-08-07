import React from 'react';
import SignloginStyle from "@styles/global/signlogin";
import { Route, Switch, useLocation } from 'react-router';
import SignLoginPage from './SignLoginpage';


const SignLoginRoutes = () => {

  return (
    <>
      <SignloginStyle/>
      <Switch>
        <Route path="/menu/signlogin/:type" render={() => <SignLoginPage />} />
      </Switch>
    </>
  )
};

export default SignLoginRoutes;
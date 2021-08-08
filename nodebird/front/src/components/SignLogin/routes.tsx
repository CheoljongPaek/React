import React from 'react';
import SignloginStyle from "@styles/global/signlogin";
import { Route, Switch, useLocation } from 'react-router';
import SignupLogin from './Page/SignupLogin';
import Colorpicker from './Page/Colorpicker';


const SignLoginRoutes = () => {

  return (
    <>
      <SignloginStyle/>
      <Switch>
        <Route path="/menu/signlogin/colorpicker" render={() => <Colorpicker />} />
        <Route path="/menu/signlogin/:type" render={() => <SignupLogin />} />
      </Switch>
    </>
  )
};

export default SignLoginRoutes;
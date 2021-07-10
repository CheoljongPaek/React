import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
// import LogIn from '@pages/Login';
// import SignUp from '@pages/SignUp';
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));


const App = () => {
  //Switch: 하위 3개 중 하나가 무조건 된다. 나머지는 없는셈친다.
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  )
};

export default App;
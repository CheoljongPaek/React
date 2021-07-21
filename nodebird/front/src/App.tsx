// import React, { useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));

function App() {

  // useEffect(() => {
  //   console.log('axios');
  //   axios.get('/api/test');
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;

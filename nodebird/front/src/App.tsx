// import React, { useEffect } from 'react';
// import axios from 'axios';
import './App.css';
// import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from '@pages/Home';
import Model from '@pages/Model';
import {AnimatePresence} from 'framer-motion';
import Header from "@components/header"

library.add(fab, fas);

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const PageNotFound = loadable(() => import('@pages/PageNotFound'));

function App() {

  // useEffect(() => {
  //   console.log('axios');
  //   axios.get('/api/test');
  // }, []);

  interface imageProps {
    width: number
    height: number
  };

  const imageDetails: imageProps = {
    width: 524,
    height: 650,
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Route render={({location}) => (          
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/model/:id'
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )} />
      </Router>

      {/* <Router>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/home" exact render={() => <Home imageDetails={imageDetails} >} />
            <Route path="/model/:id" exact render={() => <Model imageDetails={imageDetails} >} />
            <Route component={PageNotFound} />
          </Switch>
        </AnimatePresence>
      </Router> */}
    </div>
  );
}

export default App;

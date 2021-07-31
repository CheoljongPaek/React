// import './App.css';
import { Switch, BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import loadable from '@loadable/component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {AnimatePresence} from 'framer-motion';
import Header from "@components/Header"
import { imageProps } from '@typings/db';
import Menu from '@components/Menu';
import WhoAmI from '@components/WhoAmI/WhoAmI';
import { SampleProvider } from '@contextapi/menuapi';

library.add(fab, fas);

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const PageNotFound = loadable(() => import('@pages/PageNotFound'));

const Home = loadable(() => import('@pages/Home'));
const Model = loadable(() => import('@pages/Model'));

function App() {
  const imageDetails: imageProps = {
    width: 524,
    height: 650,
  };
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        {/* <Route render={({location, match, history}) => (  
          <AnimatePresence initial={false} exitBeforeEnter> */}
            <Switch>
              {/* <Route
                exact
                path='/'
                render={() => <Home imageDetails={imageDetails} />}
              /> */}
              {/* <Route
                path='/model/:id'
                render={() => <Model location={location} imageDetails={imageDetails} />}
              /> */}
              <Route exact path="/menu/whoami/:title">
                <SampleProvider>
                  <WhoAmI location={location} match={match} history={history}/>
                </SampleProvider>
              </Route>
              <Route 
                path="/menu/whoami/:title"
                render={(props) => <SampleProvider>
                  <WhoAmI {...props} />
                </SampleProvider>} />
            </Switch>
          {/* </AnimatePresence>
        )} /> */}
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

// import './App.css';
import { Switch, BrowserRouter as Router, Route, useLocation, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {AnimatePresence} from 'framer-motion';
import { imageProps } from '@typings/db';
import WhoAmI from '@components/WhoAmI/WhoAmI';
import { SampleProvider } from '@contextapi/menuapi';
import { SampleProvider as SignloginProvider } from '@contextapi/signloginapi';
import Menu from '@components/Menu';
import SignLoginRoutes from '@components/SignLogin/routes';

library.add(fab, fas);

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const PageNotFound = loadable(() => import('@pages/PageNotFound'));

const Home = loadable(() => import('@pages/Home'));
const Model = loadable(() => import('@pages/Model'));

function App() {
  
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route 
          path="/menu/whoami/:title"
          render={(props) => 
          <SampleProvider>
            <WhoAmI />
          </SampleProvider>} 
        />
        <Route 
          path="/menu/signlogin/:title"
          render={(props) => 
          <SignloginProvider>
            <SignLoginRoutes />
          </SignloginProvider>} 
        />
      </Switch>
    </div>
  );
}

export default App;

import './fonts.css';
import { Switch, BrowserRouter as Router, Route, useLocation, withRouter, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {AnimatePresence} from 'framer-motion';
import { imageProps } from '@typings/db';
import WhoAmIRoutes from '@components/WhoAmI/routes';
import { SampleProvider } from '@contextapi/menuapi';
import { SampleProvider as SignloginProvider } from '@contextapi/signloginapi';
import Menu from '@components/Menu';
import SignLoginRoutes from '@components/SignLogin/routes';
import DiaryRoutes from '@components/Diary/routes'

library.add(fab, fas);

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const PageNotFound = loadable(() => import('@pages/PageNotFound'));

const Home = loadable(() => import('@pages/Home'));
const Model = loadable(() => import('@pages/Model'));

function App() {
  console.log('App repeat');
  
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route 
          path="/menu/whoami"
          render={(props) => 
          <SampleProvider>
            <WhoAmIRoutes />
          </SampleProvider>} 
        />
        <Route 
          path="/menu/signlogin"
          render={(props) => 
            <SignloginProvider>
              <SignLoginRoutes />
            </SignloginProvider>} 
        />
        <Route 
          path="/menu/diary"
          render={(props) => 
            <DiaryRoutes />}
        />
      </Switch>
    </div>
  );
}

export default App;

import Base from '@components/WhoAmI/Base';
import Home from '@components/WhoAmI/Home';
import Order from '@components/WhoAmI/Order';
import Toppings from '@components/WhoAmI/Toppings';
import React, { memo, VFC } from "react";
import { Route, Switch, useLocation } from 'react-router';
import WhoamiStyle from "@styles/global/whoami";
import Menu from '@components/Menu';
import Header from './Header';
import {AnimatePresence} from 'framer-motion';


const WhoAmI = () => {
  const location = useLocation();
  console.log('locationkey2: ', location.key);
// locationkey1:  yp5ltp
// locationkey2:  pbwfgh
// 0.1s
// locationkey2:  yp5ltp

  return (
    <>
      <WhoamiStyle />
      {/* <Menu /> */}
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/menu/whoami/base">
            <Base />
          </Route>
          <Route path="/menu/whoami/toppings">
            <Toppings />
          </Route>
          <Route path="/menu/whoami/order">
            <Order />
          </Route> 
          <Route path="/menu/whoami/main">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>

    </>
  );
};

export default memo(WhoAmI);
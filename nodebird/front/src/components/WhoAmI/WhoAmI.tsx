import Base from '@components/WhoAmI/Base';
import Home from '@components/WhoAmI/Home';
import Order from '@components/WhoAmI/Order';
import Toppings from '@components/WhoAmI/Toppings';
import React, { memo, useState, VFC } from "react";
import { Route, Switch, useLocation } from 'react-router';
import WhoamiStyle from "@styles/global/whoami";
import Menu from '@components/Menu';
import Header from './Header';
import {AnimatePresence} from 'framer-motion';
import PopModal from '../PopModal/Modal'
import { useSampleDispatch, useSampleState } from '@contextapi/menuapi';


const WhoAmI = () => {
  const location = useLocation();
  // const [showModal, setShowModal] = useState(true);
  const state = useSampleState();
  const dispatch = useSampleDispatch();
  // dispatch({ type: 'ADD_TOPPINGS', topping: e.target.innerText })
  return (
    <>
      <WhoamiStyle />
      <PopModal />
      <Header />
      <AnimatePresence 
        exitBeforeEnter 
        onExitComplete={() => dispatch({ type: 'REMOVE_POPMODAL' })}
      >
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
import Base from '@components/WhoAmI/Base';
import Home from '@components/WhoAmI/Home';
import Order from '@components/WhoAmI/Order';
import Toppings from '@components/WhoAmI/Toppings';
import React, { memo, VFC } from "react";
import { Route, Switch } from 'react-router';
import WhoamiStyle from "@styles/global/whoami";
import Menu from '@components/Menu';
import { RouteComponentProps } from 'react-router-dom';
import { useEffect } from 'react';

interface MatchParams {
  title: string;
}

const WhoAmI = ({location, match, history}:RouteComponentProps<MatchParams>) => {

  console.log('location: ', location);
  console.log('match: ', match);
  // console.log('history: ', history);
  useEffect(() => {
    console.log('location: ', location);
    console.log('match: ', match);
  }, [])

  // let a;
  // if (match.params.title === "base") {
  //   a = <Base />
  // } else if(match.params.title === "toppings") {
  //   a = <Toppings />
  // } else if(match.params.title === "order") {
  //   a = <Order />
  // }

  return (
    <>
      <WhoamiStyle />
      <Menu />
      {/* {a} */}
      <Switch>
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
    </>
  );
};

export default memo(WhoAmI);
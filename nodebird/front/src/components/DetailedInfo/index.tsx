import Base from '@components/WhoAmI/Base';
import Home from '@components/WhoAmI/Home';
import Order from '@components/WhoAmI/Order';
import Toppings from '@components/WhoAmI/Toppings';
import React, { memo, useState } from "react";
import { Route, Switch } from 'react-router';
import { DetailedInformation } from './styles' 
import WhoamiStyle from "@styles/global/whoami"

interface pizzaProps {
  base: string;
  toppings: Array<string>
}

const DetailedInfo = () => {
  console.log('detailedInfo');
  const [pizza, setPizza] = useState<pizzaProps>({ base: "", toppings : [] });
  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  }
  const addTopping = (topping: string) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <WhoamiStyle />
      <Switch>
        <Route
          path='/test/menu/whoami/base'
          render={() => <Base addBase={addBase} pizza={pizza} />}
        />
        <Route path="/test/menu/whoami/toppings">
          {/* <Toppings addTopping={addTopping} pizza={pizza} /> */}
        </Route>
        <Route path="/test/menu/whoami/order">
          {/* <Order pizza={pizza} /> */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default memo(DetailedInfo);
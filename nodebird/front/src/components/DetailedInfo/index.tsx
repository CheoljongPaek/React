import Base from '@components/WhoAmI/Base';
import Home from '@components/WhoAmI/Home';
import Order from '@components/WhoAmI/Order';
import Toppings from '@components/WhoAmI/Toppings';
import React, { memo, useState, useReducer, createContext, Reducer, useMemo } from "react";
import { Route, Switch } from 'react-router';
import { DetailedInformation } from './styles';
import WhoamiStyle from "@styles/global/whoami";

interface pizzaProps {
  base: string;
  toppings: Array<string>
}

//PizzaContext라는 이름으로 내보내준다.
export const PizzaContext = createContext({
  pizza: {},
  dispatch: () => {},
});

const initialState = {
  pizza: { base: "", toppings : [] }
}
export const ADD_BASE = 'ADD_BASE';
export const ADD_TOPPINGS = 'ADD_TOPPINGS';

interface State {
  pizza: pizzaProps;
}

type Action =
  | { type: 'ADD_BASE'; pizza: pizzaProps; base: string; }
  | { type: 'ADD_TOPPINGS'; pizza: pizzaProps };

const reducer = (state: State, action: Action):State => {
  switch (action.type) {
    // dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
    case ADD_BASE:
      const pizza = {...state.pizza};
      pizza.base = action.base;
      return {
        ...state,
        pizza
      }

    // case ADD_TOPPINGS:
      
    //   break;
  
    default:
      console.log('action failed');
      return {
        ...state
      }
  }
}

const DetailedInfo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pizza } = state;

  // const [pizza, setPizza] = useState<pizzaProps>({ base: "", toppings : [] });
  // console.log('detailedInfo', pizza);
  // const addBase = (base: string) => {
  //   setPizza({ ...pizza, base });
  // };
  // const addTopping = (topping: string) => {
  //   let newToppings;
  //   if (!pizza.toppings.includes(topping)) {
  //     newToppings = [...pizza.toppings, topping];
  //   } else {
  //     newToppings = pizza.toppings.filter(item => item !== topping);
  //   }
  //   setPizza({ ...pizza, toppings: newToppings });
  // };

  const value = useMemo(
    () => ({ pizza, dispatch }),
    [pizza]
  );

  return (
    <>
      <WhoamiStyle />
      <Switch>
        <Route path="/test/menu/whoami/base">
          <PizzaContext.Provider value={value}>
            <Base />
          </PizzaContext.Provider>
        </Route>
        <Route path="/test/menu/whoami/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/test/menu/whoami/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route
          path='/test/menu/whoami/base'
          render={() => <Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path='/test/menu/whoami/toppings'
          render={() => <Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/test/menu/whoami/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </>
  );
};

export default memo(DetailedInfo);
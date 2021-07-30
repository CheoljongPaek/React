import React, { memo, useState } from "react";
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header';
import { BaseContainer, Btn, List, ListContainer, ToppingsContainer } from './styles';

interface pizzaProps {
  base: string;
  toppings: Array<string>
}

interface ToppingsProps {
  addTopping: (topping: string) => void;
  pizza: pizzaProps;
}

const Toppings = ({ addTopping, pizza }: ToppingsProps) => {
  console.log('pizza: ', pizza);
  
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
  return (
    <>
      <Header />
      <ToppingsContainer className="base container">
        <h3>Step 1: Choose Your Base</h3>
        <ListContainer>
          {toppings.map(topping => {
            let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
            return (
              <List key={topping} onClick={() => addTopping(topping)}>
                <span className={spanClass}>{ topping }</span>
              </List>
            )
          })}
          {pizza.toppings && (
          <div className="next">
            <Link to="/test/menu/whoami/order">
              <Btn>Next</Btn>
            </Link>
          </div>
          )}
        </ListContainer>
      </ToppingsContainer>
    </>
  );
};

export default memo(Toppings);
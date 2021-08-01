import React, { memo } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';
import { Btn, List, ListContainer, ToppingsContainer } from './styles';
import { useCallback } from 'react';
import { useSampleDispatch, useSampleState } from '@contextapi/menuapi';

const Toppings = () => {
  console.log('Toppings');
  
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  const onClickToppingsBtn = useCallback((e) => {
    dispatch({ type: 'ADD_TOPPINGS', topping: e.target.innerText })
  }, [dispatch]);

  return (
    <>
      <Header />
      <ToppingsContainer className="base container">
        <h3>Step 1: Choose Your Base</h3>
        <ListContainer>
          {toppings.map(topping => {
            let spanClass = state.pizza.toppings.includes(topping) ? 'active' : '';
            return (
              <List key={topping} onClick={onClickToppingsBtn}>
                <span className={spanClass}>{ topping }</span>
              </List>
            )
          })}
          {state.pizza.toppings && (
          <div className="next">
            <Link to="/menu/whoami/order">
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
import { useSampleDispatch, useSampleState } from '@contextapi/menuapi';
import React, { memo, useState } from "react";
import { Route, Switch } from 'react-router';
import { OrderParagraph } from './styles';



const Order = () => {
  console.log('Order');
  
  const state = useSampleState();
  const dispatch = useSampleDispatch();
  
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <OrderParagraph>You ordered a {state.pizza.base} pizza with:</OrderParagraph>
      {state.pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </div>
  )
};

export default memo(Order);
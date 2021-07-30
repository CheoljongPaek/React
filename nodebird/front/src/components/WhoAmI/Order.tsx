import React, { memo, useState } from "react";
import { Route, Switch } from 'react-router';
import { OrderParagraph } from './styles';

interface pizzaProps {
  base: string;
  toppings: Array<string>;
}

interface OrderProps {
  pizza: pizzaProps;
}

const Order = ({ pizza }: OrderProps) => {
  console.log(pizza);
  
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <OrderParagraph>You ordered a {pizza.base} pizza with:</OrderParagraph>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </div>
  )
};

export default memo(Order);
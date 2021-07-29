import React, { memo, useState } from "react";
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

interface pizzaProps {
  base: string;
  toppings: Array<string>
}

interface BaseProps {
  addBase: (base:string) => void;
  pizza: pizzaProps
}

//addBase props는 상위 컴포넌트 state 값을 변경.
const Base = ({addBase, pizza}:BaseProps) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <>
      <div className="base container">
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {bases.map(base => {
            let spanClass = pizza.base === base ? 'active' : '';
            return (
              <li key={base} onClick={() => addBase(base)}>
                <span className={spanClass}>{ base }</span>
              </li>
            )
          })}
        </ul>
        {pizza.base && (
          <div className="next">
            <Link to="/test/menu/whoami/base">
              <button>Next</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Base);
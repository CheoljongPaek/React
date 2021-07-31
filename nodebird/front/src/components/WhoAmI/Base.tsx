import { useSampleDispatch, useSampleState } from '@contextapi/menuapi';
import React, { memo, useContext, useState } from "react";
import { useCallback } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header';
import { BaseContainer, Btn, List, ListContainer } from './styles';

interface pizzaProps {
  base: string;
  toppings: Array<string>
}

interface BaseProps {
  addBase: (base:string) => void;
  pizza: pizzaProps
}

//addBase props는 상위 컴포넌트 state 값을 변경.
const Base = () => {
  const state = useSampleState();
  const dispatch = useSampleDispatch();


  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  // dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });

  const onClickBaseBtn = useCallback((e) => {
    dispatch({ type: 'ADD_BASE', base: e.target.innerText })
  }, []);

  return (
    <>
      <Header />
      <BaseContainer className="base container">
        <h3>Step 1: Choose Your Base</h3>
        <ListContainer>
          {bases.map(base => {
            let spanClass = state.pizza.base === base ? 'active' : '';
            return (
              <List key={base} onClick={onClickBaseBtn}>
                <span className={spanClass}>{ base }</span>
              </List>
            )
          })}
          {state.pizza.base && (
          <div className="next">
            <Link to="/test/menu/whoami/toppings">
              <Btn>Next</Btn>
            </Link>
          </div>
          )}
        </ListContainer>
      </BaseContainer>
    </>
  );
};

export default memo(Base);
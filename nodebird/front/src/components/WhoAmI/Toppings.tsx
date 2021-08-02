import React, { memo } from "react";
import { Link } from 'react-router-dom';
import { Btn, List, ListContainer, ToppingsContainer } from './styles';
import { useCallback } from 'react';
import { useSampleDispatch, useSampleState } from '@contextapi/menuapi';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', 
      delay: 0.5
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.25,
      yoyo: Infinity
    }
  },
};

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
      <ToppingsContainer 
        className="base container"
        variants= {containerVariants}
        initial= "hidden"
        animate= "visible"
      >
        <h3>Step 1: Choose Your Base</h3>
        <ListContainer>
          {toppings.map(topping => {
            let spanClass = state.pizza.toppings.includes(topping) ? 'active' : '';
            return (
              <List key={topping} onClick={onClickToppingsBtn}
                whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={spanClass}>{ topping }</span>
              </List>
            )
          })}
          {state.pizza.toppings && (
          <div className="next">
            <Link to="/menu/whoami/order">
              <Btn
                variants={hoverVariants}
                whileHover="hover"
              >
                Next
              </Btn>
            </Link>
          </div>
          )}
        </ListContainer>
      </ToppingsContainer>
    </>
  );
};

export default memo(Toppings);
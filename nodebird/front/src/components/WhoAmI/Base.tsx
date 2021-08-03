import { useSampleDispatch, useSampleState } from '@contextapi/menuapi';
import React, { memo } from "react";
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BaseContainer, Btn, List, ListContainer } from './styles';
import { motion } from 'framer-motion';

interface pizzaProps {
  base: string;
  toppings: Array<string>
}

interface BaseProps {
  addBase: (base:string) => void;
  pizza: pizzaProps
}

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
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
};

const btnVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', stiffness: 120
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

//addBase props는 상위 컴포넌트 state 값을 변경.
const Base = () => {
  console.log('Base');
  
  const state = useSampleState();
  const dispatch = useSampleDispatch();


  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  // dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });

  const onClickBaseBtn = useCallback((e) => {
    dispatch({ type: 'ADD_BASE', base: e.target.innerText })
  }, []);



  return (
    <>
      <BaseContainer className="base container"
        // initial={{ x: '100vw' }}
        // animate={{ x: 0 }}
        // transition={{ type: 'spring', delay: 0.5 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h3>Step 1: Choose Your Base</h3>
        <ListContainer>
          {bases.map(base => {
            let spanClass = state.pizza.base === base ? 'active' : '';
            return (
              <List key={base} onClick={onClickBaseBtn}
                whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={spanClass}>{ base }</span>
              </List>
            )
          })}
          {state.pizza.base && (
          <motion.div
            className="next"
            variants={btnVariants}
            // initial="hidden"
            // animate="visible"
          >
            <Link to="/menu/whoami/toppings">
              <Btn
                variants={hoverVariants}
                whileHover="hover"
              >Next</Btn>
            </Link>
          </motion.div>
          )}
        </ListContainer>
      </BaseContainer>
    </>
  );
};

export default memo(Base);
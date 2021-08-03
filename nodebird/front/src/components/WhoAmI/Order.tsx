import { useSampleDispatch, useSampleState } from '@contextapi/menuapi';
import React, { memo, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { OrderParagraph } from './styles';

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
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  }
}

const Order = () => {
  console.log('Order');
  
  const state = useSampleState();
  const dispatch = useSampleDispatch();
  
  return (
    <motion.div 
      className="container order"
      variants={containerVariants}
      initial= "hidden"
      animate= "visible"
      exit="exit"
    >

      <h2>Thank you for your order :)</h2>

      <OrderParagraph
        variants={childVariants}
      >
        You ordered a {state.pizza.base} pizza with:
      </OrderParagraph>
      <motion.div
        variants={childVariants}
      >
        {state.pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
};

export default memo(Order);
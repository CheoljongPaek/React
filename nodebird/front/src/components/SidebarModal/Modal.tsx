import ModalBtn from '@components/SidebarModal/ModalBtn';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, FC, useState } from 'react';
import { Backdrop, CircleEffect, Nav } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Navigation from '@components/Navigation';

interface Props {
  show: boolean;
  toggle: () => void;
}

const backdrop = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

const sidebar = {
  visible: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  hidden: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Modal:FC<Props> = ({children, show, toggle}) => {
  const stopPropagation = useCallback((e) => {
    console.log('modal stoppropagation');
    
    e.stopPropagation();
  }, []);
  
  return (
    <AnimatePresence>
      <ModalBtn show={show} toggle={toggle} key="modalBtn1"/>
      <CircleEffect
        className="circleEffect" 
        variants={sidebar} 
        key="circlebgr1" 
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        exit="hidden"
      />
      {show && (
      <Backdrop onClick={toggle}
      variants={backdrop}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      exit="hidden"
      key="backdrop1"
      >
        <CircleEffect
          className="circleEffect" 
          variants={sidebar} 
          key="circlebgr2"
          initial="hidden"
          animate={show ? "visible" : "hidden"}
          exit="hidden"
        />
        <Nav onClick={stopPropagation}>
          <Scrollbars universal>
          {/* <div className="background" /> */}
            <Navigation />
          </Scrollbars>
        </Nav>
      </Backdrop>            
      )}
  </AnimatePresence>
  )
};

export default Modal;
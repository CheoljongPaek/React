import ModalBtn from '@components/SidebarModal/ModalBtn';
import { AnimatePresence } from 'framer-motion';
import React, { useCallback, FC, useState } from 'react';
import { Backdrop, Nav } from './styles';
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
      duration: 0.2
    }
  }
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
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
    e.stopPropagation();
  }, []);
  
  return (
    <AnimatePresence exitBeforeEnter>
      <ModalBtn show={show} toggle={toggle}/>
    {show && (
      <Backdrop onClick={toggle}
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Nav>
          <Scrollbars>
          <div className="background" />
          <div onClick={stopPropagation}>
              {/* {children} */}
              <Navigation />
          </div>
          </Scrollbars>
        </Nav>
      </Backdrop>            
    )}
  </AnimatePresence>
  )
};

export default Modal;
import React, { useLayoutEffect, useRef, useState } from "react";
import { DetailedInformation } from './styles' 
import { motion, useCycle } from 'framer-motion';
import MenuStyle from "@styles/global/menu"
import Navigation from '@components/Navigation';
import MenuToggle from './MenuToggle';
import { Scrollbars } from 'react-custom-scrollbars';
// import useDimensions from "react-use-dimensions";

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

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = 550;
  // const onScroll = (e: ): void => {
  //   console.log(e);
    
  // }
  
  return (
    <>
      <MenuStyle />
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="menu"
      >
        <motion.div className="background" variants={sidebar} />
        {isOpen && <Navigation/>}
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default Menu;
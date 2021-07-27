import React, { useLayoutEffect, useRef, useState, memo, useCallback } from "react";
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
interface positionValues {
  top: number;
  left: number;
  clientWidth: number;
  clientHeight: number;
  scrollWidth: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
}
const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [scrollToBottom, setScrollToBottom] = useState(1);
  const containerRef = useRef(null);
  const height = 550;

  const scrollFrame = (values: positionValues) => {
    // console.log('scrollFrame: ', values.top);  
    setScrollToBottom(1-values.top)
    // console.log(scrollToBottom);
    
    // const color = values.top * 255;
    // const customStyle = {
    //   backgroundColor: `rgb(${color}, ${color}, ${color})`
    // };
    // console.log(customStyle);
  }
  const customStyle = {
    opacity: `${scrollToBottom}`
  }
  const onScroll = () => {
    console.log('scrolling');
    
  }
  const scrollStart = () => {
    console.log('scrollStart');
    
  }
  const scrollStop = () => {
    console.log('scrollStop');
    
  }
  
  return (
    <>
      <MenuStyle />
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="menu"
        // style={customStyle}
      >
        <motion.div className="background" variants={sidebar} />
        {/* {isOpen && <Navigation/>} */}
        {isOpen && 
        <Scrollbars 
          onScrollFrame={scrollFrame}
          autoHide 
          id="scrollbars"
        >
          <Navigation/>
        </Scrollbars>}
        <MenuToggle customStyle={customStyle} toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default memo(Menu);
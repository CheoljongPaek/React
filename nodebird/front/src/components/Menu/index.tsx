import React, { useRef, useState, memo, useCallback, useEffect } from "react";
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
  const gather = useRef<Array<number | undefined>>(Array(25));
  const height = 550;
  const itemCounts = useRef(25);

  const scrollFrame = (values: positionValues) => {
    setScrollToBottom(1 - values.top);    
  };

  const detectTouch = useCallback(() => {
    console.log('detectTouch');
    for (let i = 0; i < Math.round(itemCounts.current/2); i++) {      
      const itemHeight = document.getElementById(`MenuItem${i}`)?.getBoundingClientRect().top;
      if (itemHeight && itemHeight > 0) {
        gather.current[i] = 1;
        document.getElementById(`MenuItem${i}`)!.style.opacity = "1";
      } else {
        gather.current[i] = -1;
        document.getElementById(`MenuItem${i}`)!.style.opacity = "0.15";
      }
    }
    for (let i = Math.round(itemCounts.current/2); i < itemCounts.current; i++) {      
      const itemBottom = document.getElementById(`MenuItem${i}`)?.getBoundingClientRect().bottom;
      if (itemBottom && itemBottom < window.innerHeight -20) {
        document.getElementById(`MenuItem${i}`)!.style.opacity = "1";
      } else {
        document.getElementById(`MenuItem${i}`)!.style.opacity = "0.15";
      }
    }    
  }, []);

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
    detectTouch();
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
      >
        <motion.div className="background" variants={sidebar} />
        {isOpen && 
        <Scrollbars 
          onScrollFrame={scrollFrame}
          onScrollStop={scrollStop}
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
import React, { useRef, useState, memo, useCallback, useEffect } from "react";
import { motion, useCycle } from 'framer-motion';
import MenuStyle from "@styles/global/menu"
import Navigation from '@components/Navigation';
import MenuToggle from './MenuToggle';
import { Scrollbars } from 'react-custom-scrollbars';
import { Route, Switch } from 'react-router';
import { Nav } from './styles';
import Modal from '@components/Modal/Modal';
// import useDimensions from "react-use-dimensions";



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
    // setScrollToBottom(1 - values.top);    
  };

  
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
  const scrollStop = () => {
    detectTouch();
  }
  const onClickModalDimmer = useCallback((e) => {
    e.stopPropagation();
    toggleOpen();
    console.log('onClickModalDimmer');
  }, []);
  if (isOpen) {
    console.log('1');
  } else {
    console.log('2');
    //here
  }
  
  return (
    <>
      <MenuStyle />
      {/* {isOpen && 
            <div className="modalDimmer" onClick={onClickModalDimmer}>
            <Nav
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
            </Nav>
          </div>
      }
      {!isOpen &&
                <Nav
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
              </Nav>
      } */}
      {/* <div className="modalDimmer" onClick={onClickModalDimmer}>
        <Nav
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
        </Nav>
      </div> */}
      <Modal show={isOpen} onCloseModal={toggleOpen}>
        <Nav
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
        </Nav>
      </Modal>
    </>
  );
};

export default memo(Menu);
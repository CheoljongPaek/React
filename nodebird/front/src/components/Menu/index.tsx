import React, { useRef, useState, memo, useCallback, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import MenuStyle from "@styles/global/menu"
import Navigation from '@components/Navigation';
import ModalBtn from '../SidebarModal/ModalBtn';
import { Scrollbars } from 'react-custom-scrollbars';
import { Route, Switch } from 'react-router';
import { Nav } from './styles';
import Modal from '@components/SidebarModal/Modal';
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
    console.log('modal opened');
  } else {
    console.log('modal closed');
  }
  
  return (
    <>
      <MenuStyle />
      <Modal show={isOpen} toggle={toggleOpen} />
    </>
  );
};

export default memo(Menu);
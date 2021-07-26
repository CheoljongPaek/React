import React, { useLayoutEffect, useRef, useState } from "react";
import { DetailedInformation } from './styles' 
import { motion, SVGMotionProps, useCycle, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import MenuStyle from "@styles/global/menu"
import Navigation from '@components/Navigation';
// import useDimensions from "react-use-dimensions";
const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  
  return (
    <>
      <motion.path
        style={{opacity: opacity}}
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
      />  
    </>

  );
};

interface ToggleProps {
  toggle: () => void
}

const MenuToggle = ({ toggle }: ToggleProps) => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  
  
  
  return (
    <>
      <button onMouseEnter={toggle} onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </button>
    </>
  );
};

export default MenuToggle;
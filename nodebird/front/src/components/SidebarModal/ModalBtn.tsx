import React, { memo, useCallback, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, SVGMotionProps, useCycle, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import MenuStyle from "@styles/global/menu"
import Navigation from '@components/Navigation';
import { Btn } from '../Menu/styles';
// import useDimensions from "react-use-dimensions";
const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => {
  return (
    <>
      <motion.path
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
  show: boolean,
  toggle: () => void
}


const ModalBtn = ({ show, toggle }: ToggleProps) => {
  console.log('hmm', show);
  
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <>
    <AnimatePresence exitBeforeEnter>
        <motion.div 
          onClick={stopPropagation}
          initial="closed"
          animate={show ? "open" : "closed"}
          exit="closed"
        >
          <Btn onMouseEnter={toggle} onClick={toggle}>
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" }
                }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 9.423 L 20 9.423" },
                  open: { d: "M 11 9.423 L 11 9.423" }
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
          </Btn>
        </motion.div>
        </AnimatePresence>
    </>
  );
};

export default memo(ModalBtn);
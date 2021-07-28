import React, { useLayoutEffect, useRef, useState } from "react";
import { DetailedInformation } from './styles' 
import { motion, SVGMotionProps, useCycle, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import MenuStyle from "@styles/global/menu"
import Navigation from '@components/Navigation';
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

interface customStyleProps {
  opacity: string;
}

interface ToggleProps {
  customStyle: customStyleProps
  toggle: () => void
}

const MenuToggle = ({ customStyle, toggle }: ToggleProps) => {
  return (
    <>
      <button style={customStyle} onMouseEnter={toggle} onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            // d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { d: "M 2 9.423 L 20 9.423" },
              open: { d: "M 11 9.423 L 11 9.423" }
              // closed: { opacity: 1 },
              // open: { opacity: 0 }
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
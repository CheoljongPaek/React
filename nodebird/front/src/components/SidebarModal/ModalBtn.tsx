import React, { memo} from "react";
import { AnimatePresence, motion, SVGMotionProps } from 'framer-motion';
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
  return (
    <>
      <AnimatePresence exitBeforeEnter>
          <Btn onClick={toggle}>
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" }
                }}
                initial="closed"
                animate={show ? "open" : "closed"}
                exit="closed"
              />
              <Path
                variants={{
                  closed: { d: "M 2 9.423 L 20 9.423" },
                  open: { d: "M 11 9.423 L 11 9.423" }
                }}
                transition={{ duration: 0.1 }}
                initial="closed"
                animate={show ? "open" : "closed"}
                exit="closed"
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" }
                }}
                initial="closed"
                animate={show ? "open" : "closed"}
                exit="closed"
              />
            </svg>
          </Btn>
      </AnimatePresence>
    </>
  );
};

export default memo(ModalBtn);
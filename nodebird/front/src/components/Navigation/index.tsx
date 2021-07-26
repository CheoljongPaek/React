import { useState } from "react";
import { motion } from "framer-motion";
import MenuItem from '@components/MenuItem';
import { Scrollbars } from 'react-custom-scrollbars';

const itemIds = Array(25).fill('').map((v,i) => i);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => {
  return (
    <>
      <Scrollbars autoHide id="scrollbars">
        <motion.ul variants={variants}>
          {itemIds.map(i => (
            <MenuItem i={i} key={i} />
          ))}
        </motion.ul>
      </Scrollbars>
    </>
  )
};
//scrollbar auto hide
export default Navigation;
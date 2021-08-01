import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MenuItem from '@components/MenuItem';
import { ItemList } from '@components/Menu/styles';

const itemIds = Array(25).fill('').map((v,i) => i);

const variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 }
  }
};

const Navigation = () => {

  const itemHeight = () => {

  };
  
  return (
    <>
      <ItemList variants={variants}>
        {itemIds.map(i => (
          <MenuItem itemHeight={itemHeight} i={i} key={i} />
        ))}
      </ItemList>
    </>
  )
};
//scrollbar auto hide
export default memo(Navigation);
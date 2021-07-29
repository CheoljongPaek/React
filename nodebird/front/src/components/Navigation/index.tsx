import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MenuItem from '@components/MenuItem';
import { Scrollbars } from 'react-custom-scrollbars';
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

  
  useEffect(() => {
    // const height0 = document.getElementById('MenuItem0')?.getBoundingClientRect();
    // const height24 = document.getElementById('MenuItem24')?.getBoundingClientRect();
    // const window1 = window.screen;
    // console.log(height0);
    // console.log(height24);
    // console.log(window1);
    // console.log();
    
    
    
  }, [])

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
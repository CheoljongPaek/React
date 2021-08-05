import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import {FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'
import { Item } from '@components/Menu/styles';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0.1,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

interface ItemProps {
  itemHeight: () => void;
  i: number;
}

const MenuItem = ({ itemHeight, i }: ItemProps) => {
  let style = {border: '0px', color: 'black'};
  const iconStyle = { color: `${colors[Math.floor(i/5)]}` };

  let index = ``;
  let title = '';
  switch (i / 5) {
    case 0:
      title = "첫번째!";
      break;
    case 1:
      title = "두번째!";
      break;
    case 2:
      title = "세번째!";
      break;
    case 3:
      title = "네번째!";
      break;
    case 4:
      title = "다섯번째!";
      break;
    default:
      style = { border: `2px solid ${colors[Math.floor(i/5)]}`, color: 'black' }
      index = `\xa0${i - Math.floor(i/5)}.\xa0`
  }

  if (i === 1) {
    title += "WhoAmI";
  } else if(i === 6) {
    title += "SignLogin";
  }

  
  return (
    <Item
      id={`MenuItem${i}`}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {(i % 5 !== 0) || <Fa icon="check" size="3x" style={iconStyle}/>}
      <Link to = {`/menu/${title.toLowerCase()}/main`}>
        <div className="text-placeholder" style={style}>{index + title}</div>
      </Link>
    </Item>
  );
}

export default memo(MenuItem);
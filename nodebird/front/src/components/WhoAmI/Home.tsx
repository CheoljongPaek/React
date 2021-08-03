import React, { memo } from "react";
import { Link } from 'react-router-dom';
import { Btn, HomeContainer, HomeTitle } from './styles';
import { motion } from 'framer-motion';

const btnVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.25,
      yoyo: Infinity
    }
  },
  // visible: {
  //   x: [0, -20, 20, -20, 20, 0],
  //   transition: {
  //     delay: 2,
  //   }
  // }
}

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1, 
      duration: 1.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const Home = () => {
  console.log('Home');
  
  return (
    <>
      <HomeContainer 
        className="home container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <HomeTitle animate={{}}>
          Welcome to Pizza Joint
        </HomeTitle>
        <Link to="/menu/whoami/base">
          <Btn
            variants={btnVariants}
            // animate="visible"
            whileHover="hover"
          >
            Create Your Pizza
          </Btn>
        </Link>
      </HomeContainer>
    </>
  );
};

export default memo(Home);
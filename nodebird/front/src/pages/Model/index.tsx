import React, { memo, useEffect, useState, VFC } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ScrollForMore from "@components/scrollForMore";
import DetailedInfo from "@components/DetailedInfo";
import {SContainer, Details, FullName, ThumbnailSingle} from './styles';
import { HomeProps } from '@typings/db';
import ModelStyle from "@styles/global/model"

//framer-motion
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const firstName = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const lastName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};
const letter = {
  initial: {
    y: 400,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transition, duration: 1.2 },
  },
};
//
const FirstName = 'Yasmeen';
const SecondName = 'Tariq';

const Model: VFC<HomeProps> = ({ location, imageDetails }) => {
  console.log(location);
  
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const [canScroll, setCanScroll] = useState(false);
  
  useEffect(() => {    
    if (canScroll === false) {
      document.querySelector("body")?.classList.add("no-scroll");
    } else {
      document.querySelector("body")?.classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <>
      <ModelStyle />
      <SContainer
        onAnimationComplete={() => setCanScroll(true)}
        className='single'
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <div className='container fluid'>
          <div className='row center top-row'>
            <div className='top'>
              <Details
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.2, ...transition },
                }}
              >
                <div className='location'>
                  <span>28.538336</span>
                  <span>-81.379234</span>
                </div>
                <div className='mua'>MUA: @mylifeascrystall</div>
              </Details>
              <FullName className='model'>
                <motion.span className='first' variants={firstName}>
                  {FirstName.split('').map((item, i) => (
                    <motion.span key={i} variants={letter}>
                      {item}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span className='last' variants={lastName}>
                  {SecondName.split('').map((item, i) => (
                    <motion.span key={i} variants={letter}>
                      {item}
                    </motion.span>
                  ))}
                </motion.span>
              </FullName>
            </div>
          </div>
          <div className='row bottom-row'>
            <div className='bottom'>
              <motion.div className='image-container-single'>
                <ThumbnailSingle
                  initial={{
                    y: "-50%",
                    width: imageDetails.width,
                    height: imageDetails.height,
                  }}
                  animate={{
                    y: 0,
                    width: "85%",
                    height: window.innerWidth > 1440 ? 800 : 400,
                    transition: { delay: 0.2, ...transition },
                  }}
                  className='thumbnail-single'
                >
                  <motion.div
                    className='frame-single'
                    whileHover='hover'
                    transition={transition}
                  >
                    <motion.img
                      src={require("../../images/cat-standing.JPG").default}
                      alt='an image'
                      initial={{ scale: 1.0 }}
                      style={{ scale: scale }}
                      animate={{
                        transition: { delay: 0.2, ...transition },
                        y: window.innerWidth > 1440 ? -360 : -180,
                      }}
                    />
                  </motion.div>
                </ThumbnailSingle>
              </motion.div>
            </div>
            <ScrollForMore />
          </div>
        </div>
        <DetailedInfo />
      </SContainer>
    </>
  );
};

export default memo(Model);
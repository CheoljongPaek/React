import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';
import { HomeProps } from '@typings/db';
import {MContainer, Info, Thumbnail} from './styles';
// import './global.css'
import HomeStyle from "@styles/global/home"

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home: VFC<HomeProps> = ({ imageDetails, image }) => {
  return (
    <>
      <HomeStyle />
      <MContainer>
        <div className='container'>
          <div className='row center'>
            <div className='image-container'>
              <Thumbnail
                ref={image}
                style={{
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
              >
                <div className='frame'>
                  <Link to={`/model/yasmeen-tariq`}>
                    <ProgressiveImage
                      src={require("../../images/cat-standing.JPG").default}
                      placeholder={require("../../images/cat-standing-compressed.JPG").default}>
                      {(src: string) => (
                        <motion.img
                          src={src}
                          alt='Yasmeen Tariq'
                          whileHover={{ scale: 1.1 }}
                          transition={transition}
                        />
                      )}
                    </ProgressiveImage>
                  </Link>
                </div>
              </Thumbnail>
              <Info
                // as={motion.div}
                exit={{ opacity: 0 }}
                transition={transition}
                className='information'
              >
                <div className='title'>Yasmeen Tariq</div>
                <div className='location'>
                  <span>28.538336</span>
                  <span>-81.379234</span>
                </div>
              </Info>
            </div>
          </div>
        </div>
      </MContainer>
    </>
  );
} 

export default Home;
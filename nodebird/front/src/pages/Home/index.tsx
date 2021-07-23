import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

interface imageProps {
  width: number
  height: number
};

interface HomeProps {
  imageDetails: imageProps,
  image?: string
}

const Home: VFC<HomeProps> = ({ imageDetails, image }) => {
  
  return (
    <>
      <main>
        <div className='container'>
          <div className='row center'>
            <div className='image-container'>
              <div
                className='thumbnail'
                ref={image}
                style={{
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}>
                <div className='frame'>
                  <Link to={`/model/yasmeen-tariq`}>
                    <ProgressiveImage
                      src={require("../../images/yasmeen.webp").default}
                      placeholder={require("../../images/compressed-image.jpg").default}>
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
              </div>
              <motion.div
                exit={{ opacity: 0 }}
                transition={transition}
                className='information'>
                <div className='title'>Yasmeen Tariq</div>
                <div className='location'>
                  <span>28.538336</span>
                  <span>-81.379234</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 

export default Home;
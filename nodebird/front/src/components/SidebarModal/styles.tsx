import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Backdrop = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #00000080;
z-index: 200;
`;

export const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  z-index: 99;
  & .background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 250px;
      background: #fff;
    }
`;
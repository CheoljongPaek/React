import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  z-index: 50;
`;

export const PopModal = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  background: white;
  border-radius: 10px;
  & button {
    color: #444;
    font-weight: bold;

    margin-top: 20px;
    padding: 15px 30px;
    font-size: 1em;
    border-radius: 50px;
    background: transparent;
  }
  & p {
    color: #444;
    font-weight: bold;
  }
`

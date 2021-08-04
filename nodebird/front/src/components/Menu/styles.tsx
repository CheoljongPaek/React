import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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

export const Btn = styled(motion.button)`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  z-index: 300
`;

export const ItemList = styled(motion.ul)`
  margin: 0;
  padding: 0;
  padding: 18px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

export const Item = styled(motion.li)`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & .text-placeholder {
    font-family: 'Nanum Pen Script', cursive;
    border-radius: 5px;
    width: 200px;
    height: 45px;
    flex: 1;
    margin-left: 5px;
    font-size: 40px
  }
`;
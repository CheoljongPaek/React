import styled from '@emotion/styled';
import { motion } from 'framer-motion';

/* Header */
export const HeaderContainer = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  & .logo {
    & .pizza-svg {
      width: 80px;
      overflow: visible;
      stroke: #fff;
      stroke-width: 4;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  }
`;

export const HeaderTitle = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  font-size: 0.6em;
  & h1 {
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-bottom: 10px;
  }
`;

/* Home */
export const HomeContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 100px auto 40px;
`;

export const HomeTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 30px;
`;

export const HomeBtn = styled.button`
  color: white;
  padding: 15px 30px;
  font-size: 1em;
  border: 3px solid white;
  border-radius: 50px;
  // margin: 30px 20px;
  margin: 40px auto 0;
  background: transparent;
`;
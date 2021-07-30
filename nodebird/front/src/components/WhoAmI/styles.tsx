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

export const Btn = styled.button`
  color: white;
  padding: 15px 30px;
  font-size: 1em;
  border: 3px solid white;
  border-radius: 50px;
  // margin: 30px 20px;
  margin: 40px auto 0;
  background: transparent;
`;

/* Base */
export const BaseContainer = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 100px auto 40px;
  & h3 {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
`;

/* Toppings */
export const ToppingsContainer = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 100px auto 40px;
  & h3 {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
`;

//
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const List = styled.li`
  & span {
    opacity: 0.8;
  }
  & span:hover {
    font-weight: bold;
  }
  & span.active {
    opacity: 1;
    font-weight: bold;
  }
  & span.active::before {
    content: '>';
    position: relative;
    top: -2px;
    margin-right: 6px;
    transform: scale(0.8, 1);
    display: inline-block;
  }
`;
export const OrderParagraph = styled.p`
  margin: 20px auto;
`
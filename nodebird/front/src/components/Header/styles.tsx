import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const HContainer = styled.div`
  font-size: 16px;
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: 700;
  & .container {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    & .row {
      height: 128px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const CircleMenu = styled('div')`
  cursor: pointer;
  border-radius: 100%;
  border: 1px solid #1e1f13;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background: #1e1f13;
  }
`;

export const Logo = styled.div`
  & a {
    color: #1e1f13;
    text-decoration: none;
  }
`
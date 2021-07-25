import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MContainer = styled.main`
  & .container {
      flex-grow: 1;
      margin: 0 auto;
      padding: 0 32px;
      position: relative;
      width: auto;
      height: 100%;
    & .row {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      & .image-container {
        position: relative;
      }
    }
  }
`;

export const Info = styled(motion.div) `
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  text-transform: uppercase;
  & .title {

  }
  & .location {
    & span:nth-of-type(2) {
      margin-left: 8px;
    }
  }
`;

export const Thumbnail = styled.div`
  overflow: hidden;
  position: relative;
  & .frame img {
    width: 100%;
  }
`;

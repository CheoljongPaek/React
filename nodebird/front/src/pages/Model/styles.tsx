import styled from '@emotion/styled';
import { motion } from "framer-motion";


export const SContainer = styled(motion.div)`
  & .container {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    &.fluid {
      // width: 100%;
      // max-width: 100%;
      // padding: 0;
    }
    & .row {
      display:flex;
      align-items: flex-end;
      height: 50vh;
      width: 100%;
      position: relative;
      & .top {
        padding-bottom: 40px;
      }
      & .bottom {
        height: 100%;
        width: 100%;
      }
    }
  }
`

export const Details = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .location span:nth-of-type(2) {
    margin-left: 16px;
  }
  & .mua {
    text-transform: uppercase;
  }
`;

export const FullName = styled(motion.div)`
  overflow: hidden;
  & .first {
    margin-right: 72px;
  }
  & span {
    display: inline-block;
    position: relative;
    font-weight: 400;
    font-size: 224px;
    font-family: "Maragsa";
  }
`;

export const ThumbnailSingle = styled(motion.div)`
  width: 100%;
  height: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  & .frame-single img {
    position: absolute;
    width: 100%;
  }
`;
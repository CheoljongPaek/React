import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import colorfulplace from '@images/colorfulplace.jpg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
/* (1) SignLogin Page */
export const Title = styled.div`
  font-size: 2em;
`
const rand1_0_100 = Math.floor(Math.random()* 100);
const rand2_0_100 = Math.floor(Math.random()* 100);

export const SignLoginBox = styled(motion.div)`
  width:100%;
  display: flex;
  margin: 20px auto;
  max-width:525px;
  min-height:670px;
  position:relative;
  background:url(${colorfulplace}) no-repeat ${rand1_0_100}% ${rand2_0_100}%;;
  box-shadow: 0 12px 15px 0 rgba(0,0,0,.24), 0 17px 50px 0 rgba(0,0,0,.19);
`;
export const LoginInputs = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(40,57,101,.50);
  & > a {
    text-transform: uppercase;
    font-size: 22px;
    padding-bottom: 5px;
    margin: 0 15px 15px 0;
    display: inline-block;
    & div {
      color: #6a6f8c;
    }
  };
  .active {
    & div {
      border-bottom: 2px solid;
      border-color: #1161ee;
      color: #fff;
    }
  };
  .inactive {
    & div {
      color: #6a6f8c;
    }
  };
`
export const InputGroup1 = styled.div`
  text-transform: uppercase;
  .label {
    display: block;
    color: #aaa;
    font-size: 12px
  }
  .input {
    font-size: 16px;
    color: #fff;
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background: rgba(255,255,255,0.1);
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 15px;
  }
`
export const SubmitBtn = styled.div`
  border-bottom: 2px solid rgba(255,255,255,0.2);
  .button {
    text-transform: uppercase;
    display: block;
    background:#1161ee;
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    width: 100%;
    box-sizing: border-box;
    color: #fff;
    margin: 15px 0 30px 0;
  }
`
export const InputGroup2 = styled.div`
  margin-bottom: 20px;
  label {
    color: #aaa;
    font-size: 16px;
  }
  .button {
    background:#1161ee;
  }
`
export const FindPW = styled.div`
  &.findpwinlogin {
    color: #aaa;
    padding-top: 30px;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;    
  }
  &.findpwinsignup {
    color: #aaa;
    padding-top: 30px;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;    
  }
  a {
    text-transform: capitalize;
    color: #6a6f8c;
    font-size: 16px;
  }
`
export const Error = styled(motion.div)`
  
`
export const ErrorContainer = styled(motion.div)`
  padding-top: 10px;
  font-size: 16px;
  text-align: center;  
`
/* (2) ColorPicker Page */
export const ColorPickerBox = styled(motion.div)`
  width:90vw;
  height: 190vh;
  display: flex;
  margin: 20px auto;
  position:relative;
  background: #e2eff4;
  box-shadow: 0 12px 15px 0 rgba(0,0,0,.24), 0 17px 50px 0 rgba(0,0,0,.19);
  color: black;
`;
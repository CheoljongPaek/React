import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.div`
  font-size: 2em;
`

export const SignLoginBox = styled(motion.div)`
  width:100%;
  display: flex;
  margin: 20px auto;
  max-width:525px;
  min-height:670px;
  position:relative;
  background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center;
  box-shadow: 0 12px 15px 0 rgba(0,0,0,.24), 0 17px 50px 0 rgba(0,0,0,.19);
`;

export const LoginInputs = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(40,57,101,.85);
  & a {
    text-transform: uppercase;
    font-size: 22px;
    padding-bottom: 5px;
    margin: 0 15px 10px 0;
    display: inline-block;
  }
`

export const InputGroup1 = styled.div`
  text-transform: uppercase;
  .label {
    display: block;
    color: #aaa;
    font-size: 12px
  }
  .input {
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background: rgba(255,255,255,0.1);
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
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
    margin-bottom: 60px;
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
  text-transform:capitalize;
  color: #aaa;
  border-top: 2px solid rgba(255,255,255,0.2);
  padding-top: 50px;
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
  a {
    color: #aaa;
    font-size: 15px;
  }
`
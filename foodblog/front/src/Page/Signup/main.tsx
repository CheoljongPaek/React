import { TextField } from '@material-ui/core';
import { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';
import { SignupContainer, Form, InputContainer } from './styles';

const SignupForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, ,setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    setMismatchError(e.target.value !== passwordCheck);
  }, [passwordCheck, setPassword]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setMismatchError(e.target.value !== password);
  }, [password, setPasswordCheck]);
  
  return (
    <>      
      <SignupContainer>
        <Form>
          <TextField 
            error={false}
            label="username"
          />
          <InputContainer>
            <label htmlFor="username" className="label">Username*</label>
            <input id="username" type="text" className="input" onChange={onChangeNickname} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="eamil" className="label">Email Address*</label>
            <input type="email" className="input" value={email} onChange={onChangeEmail} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="pass" className="label">Password*</label>
            <input id="pass" type="password" autoComplete="off" className="input" data-type="password" value={password} onChange={onChangePassword} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="passCheck" className="label">Confirm Password*</label>
            <input id="passCheck" type="password" autoComplete="off" className="input" data-type="password" value={passwordCheck} onChange={onChangePasswordCheck}/>
          </InputContainer>
          <div>
            <button type="submit" className="button">Sign Up</button>
          </div>
        </Form>
        <div className="ErrorContainer">
          {mismatchError && <div>❌Password and confirm password does not match</div>}
          {!nickname && <div>First, please insert your nickname</div>}
        </div>
        <div className="findpwinsignup">
          <a href="#forgot">Forgot Password?</a>
        </div>
      </SignupContainer>
    </>
  )
};

export default SignupForm;
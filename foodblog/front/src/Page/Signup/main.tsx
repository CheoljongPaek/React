import { TextField } from '@material-ui/core';
import { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';
import { SignupContainer, Form, InputGroup, SubmitBtnContainer } from './styles';

const SignupForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [username, onChangeUsername] = useInput('');
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
          <InputGroup>
            <input id="username" autoComplete="off" placeholder="Username" type="text" value={username} onChange={onChangeUsername} />
            <label htmlFor="username">Username</label>
          </InputGroup>
          <InputGroup>
            <input id="email" placeholder="Email" type="email" value={email} onChange={onChangeEmail} />
            <label htmlFor="email">Email Address</label>
          </InputGroup>
          <InputGroup>
            <input id="pass" placeholder="Password" type="password" autoComplete="off" data-type="password" value={password} onChange={onChangePassword} />
            <label htmlFor="pass">Password</label>
          </InputGroup>
          <InputGroup>
            <input id="passCheck" placeholder="PassCheck" type="password" autoComplete="off" data-type="password" value={passwordCheck} onChange={onChangePasswordCheck}/>
            <label htmlFor="passCheck">Confirm Password</label>
          </InputGroup>
          <SubmitBtnContainer>
            <button type="submit" className="button">Sign Up</button>
          </SubmitBtnContainer>
        </Form>
        <div className="ErrorContainer">
          {mismatchError && <div>❌Password and confirm password does not match</div>}
          {!username && <div>First, please insert your nickname</div>}
        </div>
        <div className="findpwinsignup">
          <a href="#forgot">Forgot Password?</a>
        </div>
      </SignupContainer>
    </>
  )
};

export default SignupForm;
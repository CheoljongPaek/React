import useInput from '@hooks/useInput';
import { useCallback, useState } from 'react';
import { InputGroup1, FindPW, SubmitBtn, Error, ErrorContainer } from '../styles';

const SignupForm = () => {
  console.log('SignupForm');

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
      <div className="login-form">
        <div className="sign-in-htm">
          <form>
            <InputGroup1>
              <label htmlFor="user" className="label">Nickname*</label>
              <input id="user" type="text" className="input" onChange={onChangeNickname} />
            </InputGroup1>
            <InputGroup1>
              <label htmlFor="eamil" className="label">Email Address*</label>
              <input type="email" className="input" value={email} onChange={onChangeEmail} />
            </InputGroup1>
            <InputGroup1>
              <label htmlFor="pass" className="label">Password*</label>
              <input id="pass" type="password" autoComplete="off" className="input" data-type="password" value={password} onChange={onChangePassword} />
            </InputGroup1>
            <InputGroup1>
              <label htmlFor="passCheck" className="label">Confirm Password*</label>
              <input id="passCheck" type="password" autoComplete="off" className="input" data-type="password" value={passwordCheck} onChange={onChangePasswordCheck}/>
            </InputGroup1>
            <SubmitBtn>
              <button type="submit" className="button">Sign Up</button>
            </SubmitBtn>
          </form>
          <ErrorContainer className="ErrorContainer">
            {mismatchError && <Error>❌Password and confirm password does not match</Error>}
            {!nickname && <Error>First, please insert your nickname</Error>}
          </ErrorContainer>
          <FindPW className="findpwinsignup">
            <a href="#forgot">Forgot Password?</a>
          </FindPW>
        </div>
      </div>
    </>
  )
};

export default SignupForm;
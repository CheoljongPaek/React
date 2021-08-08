import React, { useState } from 'react';
import { InputGroup1, FindPW, Error, SubmitBtn, ErrorContainer } from '../styles';
import { useCallback } from 'react';
import useInput from '@hooks/useInput';


const LoginForm = () => {
  console.log('LoginForm');
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [logInError, setLogInError] = useState(true);
  

  const onSubmit = useCallback(() => {

  }, []);

  return (
    <>      
      <div className="login-form">
        <div className="sign-in-htm">
          <form onSubmit={onSubmit}>
            <InputGroup1 className="group">
              <label htmlFor="email" className="label">Email</label>
              <input id="email" type="text" className="input" value={email} onChange={onChangeEmail} />
            </InputGroup1>
            <InputGroup1 className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" autoComplete="on" className="input" data-type="password" value={password} onChange={onChangePassword} />
            </InputGroup1>
            <SubmitBtn className="group">
              <button type="submit" className="button">LogIn</button>
            </SubmitBtn>
          </form>
          {logInError && (
          <>
          <ErrorContainer>
            The email or password you typed is incorrect.
          </ErrorContainer>
          <FindPW className="findpwinlogin">
            <a href="#forgot">Forgot Password?</a>
          </FindPW>
          </>
          )}
        </div>
      </div>
    </>
  )
};

export default LoginForm;
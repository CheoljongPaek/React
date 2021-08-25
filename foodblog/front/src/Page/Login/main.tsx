import React, { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';
import { InputGroup, LoginContainer, SubmitBtn } from './styles';

const Login = () => {
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [logInError, setLogInError] = useState(true);
  

  const onSubmit = useCallback(() => {

  }, []);

  return (
    <LoginContainer>
      <form onSubmit={onSubmit}>
        <InputGroup>
          <label htmlFor="email" className="label">Email</label>
          <input id="email" type="text" className="input" value={email} onChange={onChangeEmail} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" type="password" autoComplete="on" className="input" data-type="password" value={password} onChange={onChangePassword} />
        </InputGroup>
        <SubmitBtn>
          <button type="submit" className="button">LogIn</button>
        </SubmitBtn>
      </form>
      {logInError && (
      <>
      <div>
        The email or password you typed is incorrect.
      </div>
      <div className="findpwinlogin">
        <a href="#forgot">Forgot Password?</a>
      </div>
      </>
      )}
    </LoginContainer>
  )
};

export default Login;
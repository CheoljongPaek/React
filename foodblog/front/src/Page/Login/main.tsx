import React, { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';

const Login = () => {
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
            <div className="group">
              <label htmlFor="email" className="label">Email</label>
              <input id="email" type="text" className="input" value={email} onChange={onChangeEmail} />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" autoComplete="on" className="input" data-type="password" value={password} onChange={onChangePassword} />
            </div>
            <div className="group">
              <button type="submit" className="button">LogIn</button>
            </div>
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
        </div>
      </div>
    </>
  )
};

export default Login;
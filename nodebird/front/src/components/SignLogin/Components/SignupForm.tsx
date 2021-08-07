import { InputGroup1, FindPW } from '../styles';

const SignupForm = () => {
  console.log('SignupForm');
  
  return (
    <>      
      <div className="login-form">
        <div className="sign-in-htm">
          <form>
            <InputGroup1>
              <label htmlFor="user" className="label">Username</label>
              <input id="user" type="text" className="input" />
            </InputGroup1>
            <InputGroup1>
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" autoComplete="off" className="input" data-type="password" />
            </InputGroup1>
            <InputGroup1>
              <label htmlFor="passCheck" className="label">Repeat Password</label>
              <input id="passCheck" type="password" autoComplete="off" className="input" data-type="password" />
            </InputGroup1>
            <InputGroup1>
              <label htmlFor="eamil" className="label">Email Address</label>
              <input type="email" className="input" />
            </InputGroup1>
            <InputGroup1>
              <button type="submit" className="button">Sign Up</button>
            </InputGroup1>
          </form>
          <FindPW className="findpwinsignup">
            <a href="#forgot">Forgot Password?</a>
          </FindPW>
        </div>
      </div>
    </>
  )
};

export default SignupForm;
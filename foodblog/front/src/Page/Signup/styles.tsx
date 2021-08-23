import { styled as muistyled, Container } from '@material-ui/core';


const inputHeight = '4rem';
/* main page signup */
export const SignupContainer = muistyled(Container)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
}));
export const Form = muistyled('form')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '50%',
  justifyContent: 'flex-end',
}));
export const InputGroup = muistyled('div')(({theme}) => ({


}));

export const SubmitBtnContainer = muistyled('div')(({theme}) => ({
  borderBottom: '2px solid rgba(255,255,255,0.2)',
  "& button": {
    textTransform: 'uppercase',
    display: 'block',
    backgroundColor: '#1161ee',
    border: 'none',
    borderRadius: '25px',
    width: '100%',
    boxSizing: 'border-box',
    color: '#fff',
    margin: '1rem 0 2rem 0'
  }
}));
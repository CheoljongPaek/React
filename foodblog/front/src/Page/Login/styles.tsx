import { styled as muistyled, Container } from '@material-ui/core';

const AppbarHeight = '48px';
/* main page Login */
export const LoginContainer = muistyled('div')(({theme}) => ({
  width: '100%',
  height: `calc(100% - ${AppbarHeight})`,
  background: '#444',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const InputGroup = muistyled('div')(({theme}) => ({
  textTransform: 'uppercase',
  width: '300px',
  "& label": {
    display: 'block',
    color: '#aaa',
    fontSize: '0.75rem',
  },
  "& input": {
    fontSize: '1rem',
    color: '#fff',
    border: 'none',
    padding: '15px 20px',
    borderRadius: '25px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '15px',
    "&:focus": {
      outline: 'none',
    }
  },
}));

export const SubmitBtn = muistyled('div')(({theme}) => ({
  borderBottom: '2px solid rgba(255,255,255,0.2)',
  "& button": {
    textTransform: 'uppercase',
    display: 'block',
    backgroundColor: '#2c6ad9',
    border: 'none',
    padding: '1rem 1.25rem',
    borderRadius: '1.5rem',
    width: '100%',
    boxSizing: 'border-box',
    color: '#fff',
    margin: '1rem 0 2rem 0',
  },
}));
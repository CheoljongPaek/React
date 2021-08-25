import { styled as muistyled, Container } from '@material-ui/core';

// const inputHeight = '4rem';
/* main page signup */
export const SignupContainer = muistyled(Container)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20%',
  alignItems: 'center'
  // height: '100%',
  // width: '100%',
}));
export const Form = muistyled('form')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '70%',
  height: '100%',
  justifyContent: 'flex-end',
  // border: '1px solid',
  border: 'none',
  backgroundColor: '#ebeff8',
}));
export const InputGroup = muistyled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  margin: `${theme.spacing(3)}px 0px`,
  backgroundColor: '#80c8d7',
  height: '4rem',
  width: '20rem',
  border: 'none',
  borderBottomLeftRadius: '41px',
  borderBottomRightRadius: '41px',
  borderTopLeftRadius: '41px',
  boxSizing: 'border-box',
  boxShadow: '0 17px 40px 0 rgba(75, 128, 182, 0.4)',
  // transition: 'all 0.2s ease-in-out, filter 0.2s ease-in-out, box-shadow 0.1s ease-in-out',
  "&:focus-within": {
    borderTopRightRadius: '41px',
    borderBottomRightRadius: '0px',
  },
  "& input": {
    backgroundColor: 'inherit',
    // padding: `0 0 0 ${theme.spacing(6)}px`,
    fontSize: '1.125rem',
    position: 'absolute',
    top: 0,
    left: '13%',
    boxShadow: 'none',
    border: 0,
    height: '70%',
    width: '80%',
    boxSizing: 'border-box',
    transition: 'top 0.1s ease-in-out;',
    "&::placeholder": {
      color: 'transparent',
    },
    "&:focus": {
      top: theme.spacing(2),
      outline: 'none',
      "& + label": {
        top: theme.spacing(1),
        fontSize: '0.75rem',
      }
    },
    "&:not(:placeholder-shown)": {
      top: theme.spacing(2),
    },
    "&:not(:placeholder-shown) + label": {
      top: theme.spacing(1),
      fontSize: '0.75rem',
    }
  },
  "& label": {
    position: 'absolute',
    padding: `0 ${theme.spacing(6)}px`,
    cursor: 'text',
    transition: 'all 0.1s ease-in-out',
  },
}));

export const SubmitBtnContainer = muistyled('div')(({theme}) => ({
  "& button": {
    textTransform: 'uppercase',
    display: 'block',
    backgroundColor: '#1161ee',
    border: 'none',
    borderRadius: '25px',
    width: '20rem',
    height: '4rem',
    boxSizing: 'border-box',
    color: '#fff',
    margin: '1rem 0 2rem 0',
    cursor: 'pointer',
  }
}));
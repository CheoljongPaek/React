import { styled as muistyled, Container } from '@material-ui/core';

/* main page signup */
export const SignupContainer = muistyled(Container)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
}));
export const Form = muistyled('form')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
}));
export const InputContainer = muistyled('div')(({theme}) => ({
  backgroundColor: '#ffaaff',
  // display: 'flex',
  // flexDirection: 'column',
}));
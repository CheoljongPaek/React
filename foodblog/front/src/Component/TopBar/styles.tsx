import { styled as muistyled, Paper, AppBar } from '@material-ui/core';

/* main page topbar */
export const TopMenu = muistyled(AppBar)(({theme}) => ({
  width: '100%',
  height: '50px',
  backgroundColor: 'white',
  position: 'sticky',
  top: '0px',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Josefin Sans, sans-serif',
}));

export const TopMenuLeft = muistyled('div')(({theme}) => ({
  // flexGrow: 3,
}));

export const TopMenuCenter = muistyled(Paper)(({theme}) => ({
  // flexGrow: 6,
}));

export const HList = muistyled('ul')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  '& .listItem': {
    textTransform: 'uppercase',
    marginRight: '20px',
    fontSize: '1.125rem',
    fontWeight: 300,
    cursor: 'pointer'
  }
}));

export const TopMenuRight = muistyled('div')(({theme}) => ({
  // flexGrow: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
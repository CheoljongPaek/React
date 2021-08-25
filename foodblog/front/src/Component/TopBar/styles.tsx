import { styled as muistyled, Paper, AppBar, Button, Link } from '@material-ui/core';
import { Box } from '@material-ui/system';

/* main page topbar */
export const TopMenu = muistyled(AppBar)(({theme}) => ({
  color: '#ffffffe3',
  backgroundColor: '#122c1d',
  position: 'sticky',
  "& .MuiTypography-root": {
    fontFamily: 'Architects Daughter, cursive'
  }
}));

export const LogoutBtn = muistyled(Button)(({theme}) => ({
  color: '#e5e7e6'
}));

export const SignupBtn = muistyled(Button)(({theme}) => ({
  color: '#e5e7e6'
}));

export const StyledLink = muistyled(Link)(({theme}) => {
  const backgroundColor = theme.palette.grey.A100;
  const color = theme.palette.grey.A700;
  return {
    backgroundColor,
    height: theme.spacing(3),
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    width: theme.spacing(10),
    fontWeight: 'normal',
    cursor: 'pointer',
    listStyle: 'none',
    display: 'inline-flex',
    fontSize: '0.875rem',
    alignItems: 'center',
    color,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[400],
      color: theme.palette.grey[50],
    },
    '&:active': {
      backgroundColor: theme.palette.grey[400],
      color: theme.palette.grey[50],
    },
    '&:visited': {
    }
  };
});
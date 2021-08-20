import { styled as muistyled, Paper, AppBar } from '@material-ui/core';
import { Box } from '@material-ui/system';

/* main page topbar */
export const TopMenu = muistyled(AppBar)(({theme}) => ({
  color: '#ffffffe3',
  backgroundColor: '#122c1d',
  "& .MuiTypography-root": {
    fontFamily: 'Architects Daughter, cursive'
  }
}));
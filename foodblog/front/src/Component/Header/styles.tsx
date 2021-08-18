import { styled as muistyled, Paper, AppBar } from '@material-ui/core';
import { flexbox, fontFamily } from '@material-ui/system';

/* main page Header */
export const HeaderContainer = muistyled('div')(({theme}) => ({
  marginTop: theme.spacing(8),
}));
export const HeaderTitles = muistyled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Lora, serif',
  color: '#444',
  "& .titleSm": {
    position: 'absolute',
    top: '10%',
    fontSize: '1.25rem'
  },
  "& .titleLg": {
    position: 'absolute',
    top: '12%',
    fontSize: '6.25rem'
  },
}));

export const ImgContainer = muistyled('div')(({theme}) => ({
  "& img": {
    width: "100%",
    height: "30rem",
    marginTop: '5rem',
    objectFit: 'cover'
  }
}));

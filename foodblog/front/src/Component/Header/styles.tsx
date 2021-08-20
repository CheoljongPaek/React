import { styled as muistyled, Box, Paper } from '@material-ui/core';
import { flexbox, fontFamily } from '@material-ui/system';

/* main page Header */
export const HeaderContainer = muistyled(Paper)(({theme}) => ({
  // marginTop: theme.spacing(8),
  position: 'relative',
  backgroundColor: 'rgba(170, 97, 79, 0.2)'
}));
export const HeaderTitles = muistyled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Lora, serif',
  color: '#444',
  width: '50%',
  "& .titleSm": {
    position: 'absolute',
    top: '30%',
    fontSize: '3.75rem'
  },
  "& .titleLg": {
    position: 'absolute',
    top: '40%',
    fontSize: '6.25rem'
  },
}));

export const ImgContainer = muistyled(Paper)(({theme}) => ({
  "& img": {
    width: "100%",
    // height: "100%",
    height: theme.spacing(60),
    // marginTop: theme.spacing(10),
    objectFit: 'cover'
  }
}));

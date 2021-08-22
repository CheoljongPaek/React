import { styled as muistyled, Paper, AppBar, Grid, Container, Hidden, Typography, Box, FormControl, OutlinedInput, TextField } from '@material-ui/core';
import { flexbox, fontFamily } from '@material-ui/system';

/* main page singlePostContent */
export const ContentForm = muistyled('form')(({theme}) => ({
}));

export const ImgContainer = muistyled('div')(({theme}) => ({
  "& img": {
    width: "100%",
    // height: "100%",
    height: theme.spacing(60),
    // marginTop: theme.spacing(10),
    objectFit: 'cover',
    verticalAlign: 'bottom',
    borderBottomRightRadius: theme.spacing(10),
    borderBottomLeftRadius: theme.spacing(10),
  },
}));

export const SubContainer = muistyled(Typography)(({theme}) => ({
  display: 'flex',
  alignItems: 'flex-end',
  fontFamily: 'Permanent Marker, cursive',
  // marginTop: theme.spacing(1),
}));

export const EditContainer = muistyled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const SubInfo = muistyled(Typography)(({theme}) => ({
  display: 'flex',
  backgroundColor: '#ffb32e'
}));

export const MainInfo = muistyled(Typography)(({theme}) => ({
  lineHeight:"2rem",
  "&::first-letter": {
    marginLeft: "2rem",
    fontSize: "2rem",
    fontWeight: 'bold',
  }
}));

// export const TitleField = muistyled(TextField)(({theme}) => ({
//   "& .MuiFilledInput-underline": {
//     // height: theme.spacing(8)
//   },
//   "& .MuiOutlinedInput-input": {
//     textAlign: "center"
//   }
// }));
export const TitleInput = muistyled('input')(({theme}) => ({
  backgroundColor: 'inherit',
  border: 'none',
  fontSize: '2rem',
  textAlign: 'center',
  fontFamily: 'Permanent Marker, cursive',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: '0px',
  paddingRight: '0px',
  "&:focus": {
    outlineStyle: 'none',
  },
  "&::placeholder": {
    color: '#616161',
    textAlign: 'center',
  },
  "&:focus::placeholder": {
    color: "transparent",
  }
}));

export const BtnContainer = muistyled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(2)
}));

export const SubmitBtn = muistyled('button')(({theme}) => ({
  // position: absolute;
  // top: 20px;
  // right: 50px;
  color: 'white',
  backgroundColor: '#122c1d',
  padding: '10px',
  border: 'none',
  borderRadius: '10px',
  fontSize: '16px',
  cursor: 'pointer',
}));

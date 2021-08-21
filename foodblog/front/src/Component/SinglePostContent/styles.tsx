import { styled as muistyled, Paper, AppBar, Grid, Container, Hidden, Typography } from '@material-ui/core';
import { flexbox, fontFamily } from '@material-ui/system';

/* main page singlePostContent */
export const ContentContainer = muistyled('div')(({theme}) => ({
}));

export const ImgContainer = muistyled('div')(({theme}) => ({
  "& img": {
    width: "100%",
    // height: "100%",
    height: theme.spacing(60),
    // marginTop: theme.spacing(10),
    objectFit: 'cover',
    verticalAlign: 'bottom'
  },
}));

export const SubContainer = muistyled(Typography)(({theme}) => ({
  display: 'flex',
  alignItems: 'flex-end',
  fontFamily: 'Permanent Marker, cursive',
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
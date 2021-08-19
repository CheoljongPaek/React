import { styled as muistyled, Paper, AppBar, Grid, Container, Hidden } from '@material-ui/core';
import { flexbox, fontFamily } from '@material-ui/system';

/* main page sidebar */
export const SidebarContainer = muistyled(Hidden)(({theme}) => ({
  backgroundColor: '#F5F5DC',
  padding: '2rem'
}));

export const SidebarList = muistyled(Grid)(({theme}) => ({
  // alignItems: "center",
  "$ .item": {
  }
}));
export const ImgContainer = muistyled('div')(({theme}) => ({
  "& img": {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
}));
export const IconContainer = muistyled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: theme.spacing(10),
  cursor: 'pointer',
}))
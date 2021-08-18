import { styled as muistyled, Paper, AppBar, Grid } from '@material-ui/core';
import { flexbox, fontFamily } from '@material-ui/system';

/* main page sidebar */
export const SidebarContainer = muistyled('div')(({theme}) => ({
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

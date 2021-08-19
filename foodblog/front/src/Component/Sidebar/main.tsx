import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Email, Facebook, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';
import aboutmeImg from './../../images/cat-a1.jpg'
import { IconContainer, ImgContainer, SidebarContainer, SidebarList } from './styles';

const useStyles = makeStyles((theme) => ({
  snsicon: {
    color: '#444',
    fontSize: '1.25rem',
    marginRight: '10px',
    cursor: 'pointer'
  },
  category: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(4),
    justifyContent: 'center'
  },
  typography: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <SidebarContainer>
      <div className="sidebarItem">
        <Typography className={classes.typography} variant="subtitle2">about me</Typography>
        <ImgContainer>
          <img src={aboutmeImg} alt="aboutmeImg" />
        </ImgContainer>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni iure ullam quidem velit quaerat explicabo officiis maiores nostrum enim?</p>
      </div>
      <div className="sidebarItem">
        <Divider />
          <Typography className={classes.typography} variant="subtitle2">categories</Typography>
        <Divider />
        <Grid container spacing={3} className={classes.category}>
          <SidebarList container item direction="column" alignContent="center" xs={6} spacing={3}>
            <Grid item>Life</Grid>
            <Grid item>Music</Grid>
            <Grid item>Style</Grid>
          </SidebarList>
          <SidebarList container item direction="column" alignContent="center" xs={6} spacing={3}>
            <Grid item>Sport</Grid>
            <Grid item>Tech</Grid>
            <Grid item>Cinema</Grid>
          </SidebarList>
        </Grid>
      </div>
      <div className="sidebarItem">
        <Divider />
          <Typography className={classes.typography} variant="subtitle2">FOLLOW US</Typography>
        <Divider />
        <div className="sidebarSocial">
        <IconContainer>
          <Facebook className={classes.snsicon}/>
          <Twitter className={classes.snsicon}/>
          <Email className={classes.snsicon}/>
          <Instagram className={classes.snsicon}/>
        </IconContainer>
        </div>
      </div>
    </SidebarContainer>
  )
}

export default Sidebar;
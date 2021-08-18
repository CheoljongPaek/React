import React from 'react';
import { TopMenu, TopMenuCenter, TopMenuLeft, TopMenuRight, HList } from './styles';
import { Facebook, Twitter, Email, Instagram, Search } from '@material-ui/icons';
import { Avatar, makeStyles, Paper, useTheme, Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  snsicon: {
    color: '#444',
    fontSize: '1.25rem',
    marginRight: '10px',
    cursor: 'pointer'
  },
  searchicon: {
    fontSize: '1.125rem',
    color: '#666',
    cursor: 'pointer'
  },
  headerce: {
    // color: '#000000',
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1),
      // backgroundColor: "#aaaa00"
    }
  }
}));

const TopBar = () => {
  const classes = useStyles();
  // const theme = useTheme();
  // console.log(theme);

  return (
    <TopMenu>
      <Grid container>
        <Grid container item xs={3} justifyContent="center" alignContent="center">
          <Hidden smDown={true}>
            <TopMenuLeft>
              <Paper>
                <div className="iconContainer">
                  <Facebook className={classes.snsicon}/>
                  <Twitter className={classes.snsicon}/>
                  <Email className={classes.snsicon}/>
                  <Instagram className={classes.snsicon}/>
                </div>
              </Paper>
            </TopMenuLeft>
          </Hidden>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignContent="center">
          <TopMenuCenter className={classes.headerce}>
            <HList>
              <li className="listItem">home</li>
              <li className="listItem">about</li>
              <li className="listItem">contact</li>
              <li className="listItem">logout</li>
            </HList>
          </TopMenuCenter>
        </Grid>
        <Grid container item xs={3} justifyContent="center" alignContent="center">
          <Hidden smDown>
            <TopMenuRight>
              <Avatar/>
              <Search className={classes.searchicon}/>
            </TopMenuRight>
          </Hidden>
        </Grid>
      </Grid>
    </TopMenu>
  )
};

export default TopBar;
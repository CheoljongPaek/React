import React from 'react';
import { Header, HeaderCenter, HeaderLeft, HeaderRight, TestHeader, TestHeaderCenter, TestHeaderLeft } from './styles';
import { Facebook, Twitter, Email, Instagram, Search } from '@material-ui/icons';
import { Avatar, Button, makeStyles, Box, Paper } from '@material-ui/core';
import { } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#444',
    fontSize: '20px'
  },
  headerce: {
    color: '#000000',
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1),
      backgroundColor: "#aaaa00"
    }
  }
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <TestHeader>
      <TestHeaderLeft>
        <Paper>
        <div className="iconContainer">
          <Facebook className={classes.icon}/>
          <Twitter fontSize="small" color="primary"/>
          <Email fontSize="small" color="primary"/>
          <Instagram fontSize="small" color="secondary"/>
        </div>
        <Box 
          sx={{
            border: 1,
            minWidth: 300,
            bgcolor: 'secondary.main'

          }}
          // bgcolor="secondary.main"
        >hmm</Box>
        {/* <Box sx={{ color: 'text.secondary' }}>primary.main</Box> */}
        <Box color="primary.darker">secondary.main</Box>
        <Box color="secondary.main">secondary.main</Box>
        </Paper>
      </TestHeaderLeft>
      <TestHeaderCenter className={classes.headerce}>
        <ul className="list">
          <li className="listItem">home</li>
          <li className="listItem">about</li>
          <li className="listItem">contact</li>
          <li className="listItem">logout</li>
        </ul>
      </TestHeaderCenter>
      <HeaderRight>
        {/* <img src="" alt="" /> */}
        <Avatar/>
        <Search />
        <Button>hmmm</Button>
      </HeaderRight>
    </TestHeader>
  )
};

export default TopBar
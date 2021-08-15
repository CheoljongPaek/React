import React from 'react';
import { Header, HeaderCenter, HeaderLeft, HeaderRight } from './styles';
import { Facebook, Twitter, Email, Instagram, Search } from '@material-ui/icons';
import { Avatar, Button, makeStyles, Box } from '@material-ui/core';
import { } from '@material-ui/system';

const useStyles = makeStyles((theme) => {
  return {
    icon: {
      color: '#444',
      fontSize: '20px'
    }
  }
})

const TopBar = () => {
  const classes = useStyles();

  return (
    <Header>
      <HeaderLeft>
        <div className="iconContainer">
          <Facebook className={classes.icon}/>
          <Twitter fontSize="small" color="primary"/>
          <Email fontSize="small" color="primary"/>
          <Instagram fontSize="small" color="primary"/>
        </div>
        <Box 
          sx={{
            border: 1,
            minWidth: 300,
            color: 'secondary.main'

          }}
        >hmm</Box>
        {/* <Box sx={{ color: 'text.secondary' }}>primary.main</Box> */}
        <Box color="primary.darker">secondary.main</Box>
      </HeaderLeft>
      <HeaderCenter>
        <ul className="list">
          <li className="listItem">home</li>
          <li className="listItem">about</li>
          <li className="listItem">contact</li>
          <li className="listItem">logout</li>
        </ul>
      </HeaderCenter>
      <HeaderRight>
        {/* <img src="" alt="" /> */}
        <Avatar/>
        <Search />
      </HeaderRight>
    </Header>
  )
};

export default TopBar
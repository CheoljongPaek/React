import { Breadcrumbs, makeStyles } from '@material-ui/core';
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { StyledLink } from './styles';

function handleClick(event) {
  // event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsContainer: {
    margin: theme.spacing(2)
  },
  breadcrumbs: {
    "& .MuiBreadcrumbs-ol": {
      justifyContent: 'center'
    }
  }
}));

const CenterNav = () => {
  const classes = useStyles();
  return (
    <div role="navigation" className={classes.breadcrumbsContainer} onClick={handleClick}>
        <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
          <StyledLink
            component={RouterLink}
            to="/"
          >Home</StyledLink>
          <StyledLink
            component={RouterLink}
            to="/write"
          >Write</StyledLink>
          <StyledLink
            component={RouterLink}
            to="/post"
          >Post</StyledLink>
          <StyledLink
            component={RouterLink}
            to="/signup"
          >Signup</StyledLink>
          <StyledLink
            component={RouterLink}
            to="/login"
          >Login</StyledLink>
        </Breadcrumbs>
    </div>
  )
};

export default CenterNav;
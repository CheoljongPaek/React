import React from 'react';
import { LogoutBtn, SignupBtn, StyledLink, TopMenu } from './styles';
import { Facebook, Twitter, Email, Instagram, Search, Menu as MenuIcon, Mail, Notifications, AccountCircle, MoreVert, ExitToApp } from '@material-ui/icons';
import { Avatar, makeStyles, Menu, Toolbar, IconButton, Typography, InputBase, Icon, Badge, alpha, MenuItem } from '@material-ui/core';
import { useHistory, Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  serach: {
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerce: {
    // color: '#000000',
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1),
      // backgroundColor: "#aaaa00"
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#ffffffe3',
  },
  MainTitle: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    cursor: 'pointer',
  },
  SubTitle: {
    
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  toolbarRoot: {
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.spacing(6)
    },
  },
  removeInMobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const user = false;

  const handleMobileMenuOpen = (e: React.MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(e.currentTarget)
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleProfileMenuOpen = (e: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      {user && (
        // <div>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <ExitToApp />
            </IconButton>
            <p>Logout</p>
          </MenuItem>
        // </div>
      )}
    </Menu>
  )
  
  return (
    <div id="topMenuContainer" className={classes.grow}>
      <TopMenu elevation={1}>
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            className={classes.MainTitle} 
            variant="h6" 
            noWrap
            onClick={() => history.push({
              pathname: "/",
            })}
          >
            Food Blog
          </Typography>
          <div className={classes.serach}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase 
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{}}
            />
          </div>
          <div className={classes.grow} />
          {user? 
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={11} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <ExitToApp />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              // onClick={handleProfileMenuOpen}
              color="inherit"
              onClick={() => history.push({
                pathname: "/setting",
              })}
            >
              <AccountCircle />
            </IconButton>
          </div> 
          : 
          <>
            <RouterLink to="/login">
              <LogoutBtn>login</LogoutBtn>
            </RouterLink>
            <RouterLink to="/signup">
              <SignupBtn className={classes.removeInMobile}>signup</SignupBtn>
            </RouterLink>
            {/* <LogoutBtn>login</LogoutBtn> */}
            {/* <SignupBtn className={classes.removeInMobile}>signup</SignupBtn> */}

          </>
          }
          {user &&
          <div className={classes.sectionMobile}>
            <IconButton
              onClick={handleMobileMenuOpen}
            >
              <MoreVert />
            </IconButton>
          </div>
          }
        </Toolbar>
      </TopMenu>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
};

export default TopBar;
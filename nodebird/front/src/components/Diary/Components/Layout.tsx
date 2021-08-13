import { ClassNames } from '@emotion/react';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Avatar, makeStyles, Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AppBar, Toolbar } from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined, FolderOutlined, FolderOpenOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { format } from 'date-fns';
import { NoteProps } from '../Page/Note';
import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode
};

const drawrWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawrWidth,
    },
    drawerPaper: {
      width: drawrWidth
    },
    root: {
      display: 'flex'
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2)
    },
    appbar: {
      width: `calc(100% - ${drawrWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
});

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/menu/diary'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined color="secondary" />,
      path: '/menu/diary/create'
    },
    {
      text: 'Manage Notes',
      icon: <FolderOutlined color="secondary" />,
      path: '/menu/diary/manage'
    }
  ];
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the { format(new Date(), 'do MMMM Y') }
          </Typography>
          <Typography>
            CJPaek
          </Typography>
          <Avatar className={classes.avatar}/>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            CJ Notes
          </Typography>
        </div>
        {/* list / links */}
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : undefined}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
};

export default Layout;
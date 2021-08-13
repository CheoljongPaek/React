import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Note from './Page/Note';
import CreateNote from './Page/CreateNote';
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors';
import Layout from './Components/Layout';
import ManageNote from './Page/ManageNote';

const theme = createTheme({
  palette: {
    primary: {
      main: '#38b34d'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'QuickSand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

const DiaryRoutes = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/menu/diary" render={() => <Note />} />
            <Route exact path="/menu/diary/create" render={() => <CreateNote />} />
            <Route exact path="/menu/diary/manage" render={() => <ManageNote />} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </>
  )
};

export default DiaryRoutes;
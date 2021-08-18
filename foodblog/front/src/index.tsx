import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import { jsx, ThemeProvider } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <Suspense fallback={(<div>Loading</div>)}> */}
          <CssBaseline />
          <App />
        {/* </Suspense> */}
        {/* </ThemeProvider> */}
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
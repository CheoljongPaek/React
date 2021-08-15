import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import { ThemeProvider } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Suspense fallback={(<div>Loading</div>)}> */}
        {/* <CssBaseline /> */}
        <App />
      {/* </Suspense> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
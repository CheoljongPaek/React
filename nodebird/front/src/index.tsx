import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import ResetStyle from '@styles/global/reset'
import { useState } from 'react';

type tt = {
  text: string;
  background: string;
  buttonText: string;
  buttonTextHover: string;
  buttonBorder: string;
  buttonBg: string;
  buttonBgHover: string;
}

const themeLight: tt = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0,0,0,0)",
  buttonBgHover: "rgba(0,0,0,1)"
};

const themeDark: tt = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255,255,255,0)",
  buttonBgHover: "rgba(255,255,255,1)"
}

function Root() {
  const [isDark, setIsDark] = useState(false);
  return (
    <React.StrictMode>
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <ResetStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();

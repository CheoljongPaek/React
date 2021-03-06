import { createTheme } from '@material-ui/core/styles';
import { grey, purple, red } from '@material-ui/core/colors';
import React from 'react';

declare module '@material-ui/core/styles' {
  interface Theme {
    status: {
      primary: {
        main: string,
        darker: React.CSSProperties['color']
      },
      secondary: {
        main: string
      },
    },
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      primary?: {
        main?: string,
        darker?: React.CSSProperties['color']
      },
      secondary?: {
        main?: string
      }
    }
  }
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: '#11cb5f',
      darker: '#de1e2f',
    },
    secondary: grey,
    type: "light"
  }
});

export default theme;
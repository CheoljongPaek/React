import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { ReactText } from 'react';

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
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      primary?: {
        main?: string,
        darker?: React.CSSProperties['color']
      },
      secondary: {
        main: string
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

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

const theme = createTheme({
  palette: {
    primary: {
      main: '#11cb5f',
      darker: '#de1e2f',
    },
    secondary: {
      main: '#0088ff',
    }
  }
});

export default theme;
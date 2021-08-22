import { styled as muistyled, Container } from '@material-ui/core';

/* main page setting */
export const SettingContainer = muistyled(Container)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const TitleLine = muistyled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const SettingForm = muistyled('div')(({theme}) => ({
  "& label": {
    fontSize: '20px',
    fontWeight: 'bold',

  },
  display: 'flex',
  flexDirection: 'column',
}));

export const ImageLine = muistyled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  "& img": {
    marginRight: theme.spacing(1),
  },
}));
export const Title = muistyled('h1')(({theme}) => ({
  color: '#647a1a'
}));
export const SettingInput = muistyled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  "& label": {

  },
  "& input": {
    backgroundColor: 'inherit',
    border: 'none',
    fontSize: '1rem',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: '1px solid',
    "&:focus": {
      outlineStyle: 'none',
    },
    "&::placeholder": {
      color: '#616161',
    },
    "&:focus::placeholder": {
      color: "transparent",
    }
  }
}));

export const InputLine = muistyled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const DeleteBtn = muistyled('span')(({theme}) => ({
  cursor: 'pointer'
}));
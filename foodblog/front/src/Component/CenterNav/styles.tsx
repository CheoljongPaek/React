import { styled as muistyled, Box, Paper, Container, Chip, emphasize, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export const StyledLink = muistyled(Link)(({theme}) => {
  const backgroundColor = theme.palette.grey.A100;
  const color = theme.palette.grey.A700;
  return {
    backgroundColor,
    height: theme.spacing(3),
    // color: theme.palette.text.primary,
    // fontWeight: theme.typography.fontWeightRegular,
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    borderRadius: '16px',
    width: theme.spacing(10),
    fontWeight: 'normal',
    cursor: 'pointer',
    listStyle: 'none',
    display: 'inline-flex',
    fontSize: '0.875rem',
    alignItems: 'center',
    color,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[400],
      color: theme.palette.grey[50],
    },
    '&:active': {
      backgroundColor: theme.palette.grey[400],
      color: theme.palette.grey[50],
    },
    '&:visited': {
    }
  };
});
import styled from '@emotion/styled';
import { Button, makeStyles, darken, styled as muistyled } from '@material-ui/core';

/* main page topbar */
export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
`;

export const TestHeader = muistyled('header')(({theme}) => ({
  width: '100%',
  height: '50px',
  backgroundColor: 'white',
  position: 'sticky',
  top: '1px',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Josefin Sans, sans-serif',
}));

export const HeaderLeft = styled.div`
  flex-grow: 3;
`
export const TestHeaderLeft = muistyled('div')(({theme}) => ({
  flexGrow: 3,
  color: theme.palette.primary.main
}));

export const HeaderCenter = styled.div`
  flex-grow: 6;
`

export const TestHeaderCenter = muistyled('div')(({theme}) => ({
  flexGrow: 6,
  color: theme.palette.primary.main
}));

export const HeaderRight = styled.div`
  flex-grow: 3;
  display: flex;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`
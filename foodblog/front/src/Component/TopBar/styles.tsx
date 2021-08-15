import styled from '@emotion/styled';

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

export const HeaderLeft = styled.div`
  flex-grow: 3;
`

export const HeaderCenter = styled.div`
  flex-grow: 6;
`

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
import { Global, css } from '@emotion/react';

const menu = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap');

  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%);
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuCSS = () => {
  return <Global styles={menu} />
}

export default MenuCSS;
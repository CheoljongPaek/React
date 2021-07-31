import { Global, css } from '@emotion/react';

/* font styles */
const menu = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap');
`;

const MenuCSS = () => {
  return <Global styles={menu} />
}

export default MenuCSS;
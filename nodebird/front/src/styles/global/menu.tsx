import { Global, css } from '@emotion/react';

/* font styles */
const menu = css`
  // .modalDimmer {
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   right: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: #00000080;
  //   z-index: 200;
  // }

  // .modalContainer {
  //   position: absolute;
  //   width: 375px;
  //   height: 620px;
  //   left: 50%;
  //   top: 50%;
  // }
`;

const MenuCSS = () => {
  return <Global styles={menu} />
}

export default MenuCSS;
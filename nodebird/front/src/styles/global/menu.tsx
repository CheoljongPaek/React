import { Global, css } from '@emotion/react';

/* font styles */
const menu = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap');

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

  .modalContainer {
    position: absolute;
    width: 375px;
    height: 620px;
    left: 50%;
    top: 50%;
  }
`;

const MenuCSS = () => {
  return <Global styles={menu} />
}

export default MenuCSS;
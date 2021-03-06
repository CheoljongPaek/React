import { Global, css } from '@emotion/react';

const home = css`
  * {
    box-sizing: border-box;
    font-family: "HelveticaNeue-CondensedBold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #f0d8bb;
    color: #1e1f13;
  }
  body:before {
    animation: grain 8s steps(10) infinite;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png");
    content: "";
    height: 300%;
    left: -50%;
    opacity: 0.3;
    position: fixed;
    top: -100%;
    width: 300%;
  }
  body.no-scroll {
    overflow-y: hidden;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  @keyframes grain {
    0%, 100% {
      transform: translate(0, 0);
  }
    10% {
      transform: translate(-5%, -10%);
  }
    20% {
      transform: translate(-15%, 5%);
  }
    30% {
      transform: translate(7%, -25%);
  }
    40% {
      transform: translate(-5%, 25%);
  }
    50% {
      transform: translate(-15%, 10%);
  }
    60% {
      transform: translate(15%, 0%);
  }
    70% {
      transform: translate(0%, 15%);
  }
    80% {
      transform: translate(3%, 35%);
  }
    90% {
      transform: translate(-10%, 10%);
  }
  }
  .container {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 960px;
  }
  }
  @media (min-width: 1216px) {
    .container {
      max-width: 1152px;
  }
  }
  @media (min-width: 1408px) {
    .container {
      max-width: 1560px;
  }
  }
  @media (max-width: 1440px) {
    .single .container .top-row .top .model span {
      font-size: 128px;
  }
  }
`;

const HomeCSS = () => {
  return <Global styles={home} />
}

export default HomeCSS;
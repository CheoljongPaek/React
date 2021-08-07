import { Global, css } from '@emotion/react'

const style = css`
  html {
    height: 100%;
  }
  body, ul, h1, h2, h3, p, button, a, div{
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Open Sans', sans-serif;
    // letter-spacing: 2px;
    list-style-type: none;
    text-decoration: none;
  }
  body{
    background: rgb(0,36,24);
    background: linear-gradient(270deg, rgba(0,36,24,1) 0%, rgba(119,119,230,1) 20%, rgba(255,64,0,1) 100%);    // overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .App {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .container{
    // max-width: 300px;
    // margin: 100px auto 40px;
  }
  .container li{
    // padding: 10px;
    // cursor: pointer;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
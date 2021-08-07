import { Global, css } from '@emotion/react'

const style = css`
  /* fonts */
  body, ul, h1, h2, h3, p, button, a, div{
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Open Sans Condensed', sans-serif;
    letter-spacing: 2px;
    list-style-type: none;
    text-decoration: none;
  }
  body{
    // background: rgb(100,0,123);
    // background: radial-gradient(circle, rgba(100,0,123,1) 0%, rgba(62,20,86,1) 100%);
    // background: #f5a911;
    background: radial-gradient(circle, #ff6600 0%, #ffb300 100%);
    overflow: hidden;
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
    max-width: 300px;
    margin: 100px auto 40px;
  }
  .container li{
    padding: 10px;
    cursor: pointer;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
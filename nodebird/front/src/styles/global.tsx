import { Global, css } from '@emotion/react'

const style = css`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: all .6s cubic-bezier(.5, .2, .2, 1.1);
    color: #fff;
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

  a {
    font-family: 'open sans', 'lato', 'helvetica', sans-serif;
    text-decoration: none;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
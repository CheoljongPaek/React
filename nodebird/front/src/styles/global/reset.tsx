import { Global, css } from '@emotion/react'

const style = css`
  html, body {
    margin: 0;
    padding: 0;
    color: #000;
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
    text-decoration: none;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
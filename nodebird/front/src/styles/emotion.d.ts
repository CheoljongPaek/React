import '@emotion/react'

declare module '@emotion/react' {

  interface Palette {
    first: string,
    second: string,
    thrid: string,
    fourth: string,
    fifth: string
  }

  export interface Theme {
    pageColor: Palette
    mq: {
      laptop: string
      tablet: string
      mobile: string
    }
  }
}
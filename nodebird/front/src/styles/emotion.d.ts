import '@emotion/react'

declare module '@emotion/react' {

  interface PagePalette {
    first: string,
    second: string,
    thrid: string,
    fourth: string,
    fifth: string
  }

  export interface Theme {
    pageColor: PagePalette
    mq: {
      laptop: string
      tablet: string
      mobile: string
    }
  }
}
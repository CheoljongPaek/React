export const sizes = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
}

export const colors = {
  page: {
    first: "darkslateblue",
    second: "tomato",
    thrid: "gold",
    fourth: "deeppink",
    fifth: "rebeccapurple",
  }
}

const theme = {
  pageColor: colors.page,
  mq: {
    laptop: `@media only screen and (min-width: ${sizes.largest})`,
    tablet: `@media only screen and (min-width: ${sizes.large})`,
    mobile: `@media only screen and (min-width: ${sizes.small})`,
  },
}

export default theme
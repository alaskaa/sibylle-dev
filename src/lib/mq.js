import { css } from "styled-components"

const sizes = {
  xLarge: 1200,
  large: 992,
  medium: 768,
  small: 576,
}

// Iterate through the sizes and create a media template
const mq = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default mq

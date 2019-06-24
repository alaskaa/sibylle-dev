import styled, { css } from "styled-components"
import mq from "../lib/mq"

const WhiteHeadingWrapper = styled.h1`
  margin-top: 65px;
  font-family: "Vidaloka", serif;
  font-size: 48px;

  ${mq.medium(css`
    margin-top: 100px;
  `)}
`

export default WhiteHeadingWrapper

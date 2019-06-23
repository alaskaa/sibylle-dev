import styled, { css } from "styled-components"
import mq from "../lib/mq"

const FlexIcons = styled.div`
  display: flex;
  margin: 48px auto;
  flex-direction: row;
  justify-content: space-between;
  width: 260px;

  a {
    appearance: none;
    color: #000000;
  }

  ${mq.large(css`
    margin-top: 100px;
  `)}
`

export default FlexIcons

import styled, { css } from "styled-components"
import mq from "../../../lib/mq"

const IntroWrapper = styled.section`
  margin-bottom: 40px;

  ${mq.medium(css`
    margin-bottom: 64px;
  `)}
`

export default IntroWrapper

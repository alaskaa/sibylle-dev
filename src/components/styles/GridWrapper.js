import styled from "styled-components"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  p:nth-of-type(odd) {
    grid-column: 1/2;
    padding-right: 16px;
  }

  p:nth-of-type(even) {
    grid-column: 2/3;
    text-align: right;
  }

  p {
    a {
      color: #696969;
      font-weight: 600;
      text-decoration: none;
    }
  }
`

export default GridWrapper

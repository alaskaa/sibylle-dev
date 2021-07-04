import React from "react"
import GridWrapper from "../styles/GridWrapper"

const Writing = () => (
  <React.Fragment>
    <h3>Writing</h3>
    <GridWrapper>
      <p>
        <a href="https://learn.react-js.dev/" target="_blank"
          rel="noopener noreferrer">React Deep Dive (Co-Authorship/ Translation)</a>
      </p>
      <p>06/2020</p>  
      <p>
        <a
          href="https://medium.com/javascript-deep-dive/ydkjs-scope-and-closures-cf1f65ac831d"
          target="_blank"
          rel="noopener noreferrer"
        >
          YDKJS - Scope and Closures
        </a>
      </p>
      <p>09/2018</p>
      <p>
        {" "}
        <a
          href="https://medium.com/javascript-deep-dive/ydkjs-up-going-ab2cd1229555"
          target="_blank"
          rel="noopener noreferrer"
        >
          YDKJS - Up & Going
        </a>
      </p>
      <p>08/2018</p>
      <p>
        <a
          href="https://medium.com/free-code-camp/an-introduction-to-web-performance-and-the-critical-rendering-path-ce1fb5029494"
          target="_blank"
          rel="noopener noreferrer"
        >
          An introduction to Web Performance and the Critical Rendering Path
        </a>
      </p>
      <p>05/2018</p>
      <p>
        <a
          href="https://medium.com/free-code-camp/my-first-hacktoberfest-experiences-of-contributing-to-open-source-as-a-first-timer-b538f7c129dc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Experiences of Contributing to Open Source as a First Timer
        </a>
      </p>
      <p>02/2018</p>
    </GridWrapper>
  </React.Fragment>
)

export default Writing

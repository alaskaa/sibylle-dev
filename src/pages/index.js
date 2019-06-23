import React from "react"
import Helmet from "react-helmet"

import SEO from "../components/seo"
import SiteWrapper from "../components/SiteWrapper"
import WhiteHeadingWrapper from "../components/WhiteHeadingWrapper"
import FlexIcons from "../components/FlexIcons"

import Twitter from "../components/Twitter"
import LinkedIn from "../components/LinkedIn"
import GitHub from "../components/GitHub"
import Footer from "../components/Footer"
import ContentBox from "../components/ContentBox"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Sibylle Sehl" />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Vidaloka|Raleway&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <SiteWrapper>
      <ContentBox>
        <WhiteHeadingWrapper>Hi, I'm Sibylle</WhiteHeadingWrapper>
        <p>Frontend Developer based in Berlin.</p>
        <br />
        <p>
          Curious and always eager to learn about new and better ways to solve a
          problem.
        </p>
        <p>
          Code, Diagrams and lots of sparkling water are my tools of choice.
        </p>
        <p>
          Enthusiastic about development solutions that feel intuitive and
          provide better mental models for our abstractions.
        </p>
        <p>Currently really into React and GraphQL.</p>

        <FlexIcons>
          <a href="https://twitter.com/s_ibylle">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/sibyllekatharinasehl">
            <LinkedIn />
          </a>
          <a href="https://github.com/alaskaa">
            <GitHub />
          </a>
        </FlexIcons>
      </ContentBox>
      <Footer>
        <p>Copyright Sibylle Sehl</p>
        <p>Icons by Feather Icons</p>
      </Footer>
    </SiteWrapper>
  </React.Fragment>
)

export default IndexPage

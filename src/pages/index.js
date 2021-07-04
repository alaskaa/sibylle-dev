import React from "react"
import Helmet from "react-helmet"

import SEO from "../components/seo"
import SiteWrapper from "../components/styles/SiteWrapper"
import ContentBox from "../components/styles/ContentBox"

import Speaking from "../components/Speaking/Speaking"
import Writing from "../components/Writing/Writing"
import Intro from "../components/Intro/Intro"

import FlexIcons from "../components/styles/FlexIcons"
import Twitter from "../components/svg/Twitter"
import LinkedIn from "../components/svg/LinkedIn"
import GitHub from "../components/svg/GitHub"
import Footer from "../components/styles/Footer"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Sibylle Lancaster" />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Vidaloka|Raleway&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <SiteWrapper>
      <ContentBox>
        <Intro />
        <Writing />
        <Speaking />
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
        <p>Copyright Sibylle Lancaster</p>
        <p>Icons by Feather Icons, S Icon by Icons8</p>
      </Footer>
    </SiteWrapper>
  </React.Fragment>
)

export default IndexPage

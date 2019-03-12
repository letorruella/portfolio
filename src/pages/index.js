import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO
      title=":)"
      keywords={[
        `web developer`,
        `django developer`,
        "wordpress",
        "vue",
        `react`,
      ]}
    />
    <div>
        {/*
      <nav class="nav">
        <Link class="link" to="/resume">
          {" "}
          Resume.{" "}
        </Link>
        <br />
       <Link class="link" to="/resume">
          {" "}
          Portfolio.{" "}
        </Link>
        <br />
       <Link class="link" to="/resume">
          {" "}
          Blog.{" "}
    </Link> 
      </nav>*/}
      <div>
        <a class="portfolio-dots" href="#portfolio-0">.</a>
        <a class="portfolio-dots" href="#portfolio-0">.</a>
      </div>
      <div class="main">
      
        <div class="main__wrapper">
          <h1>Luis Torruella.</h1>
          <p> I help companies make the best products in the web. </p>
        </div>
        <hr/>
      </div>
      

      <Portfolio />
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import Footer from "../components/footer"
import Nav from '../components/nav'

//import BGGraph from "../components/bg-graph"
//import { Link } from "gatsby"

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
   
     
      <nav class="nav">
       {/* <Link class="link" to="/resume">
          {" "}
          Resume.{" "}
        </Link>
        <br />
       <Link class="link" to="/resume">
          {" "}
          Portfolio.{" "}
        </Link>
        <br />
        */}
       <Link class="link" to="/blog">
          {" "}
          Blog.{" "}
    </Link> 
      </nav>
 {/*
    <BGGraph />
*/}

      <div class="main">
        <div class="main-container">
          <h1 class="main-container_title">Luis Torruella.</h1>
          <p class="main-container_subtitle">
            {" "}
            I help companies make the best products in the web{" "}
          </p>
        </div>
      </div>

      <Portfolio />

      <Footer />
    </div>
  </Layout>
)

export default IndexPage

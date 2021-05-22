import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import Footer from "../components/footer"

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
      <div className="main">
        <div className="main-container">
          <h1 className="main-container_title">Luis Torruella.</h1>
          <p className="main-container_subtitle"> I create value with tech </p>
        </div>
      </div>

      <Portfolio />

      <Footer />
    </div>
  </Layout>
)

export default IndexPage

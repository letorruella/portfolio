import React from "react"
//import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
//import Template from "../templates/blogTemplate"
import Footer from "../components/footer"
//import { Link } from "gatsby"
import bgvideo from "../images/videos/bgvideo.mp4"

export default function BlogPage({}) {
  return (
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
        <video autoplay muted loop id="myVideo">
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <Footer />
    </Layout>
  )
}

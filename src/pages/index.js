import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web developer`, `django developer`,'wordpress','vuew', `react`]} />
   <div class="main">
      <div class="main__wrapper">
        <h1>Luis  Torruella</h1>
        <p>web developer</p>
      </div>
   </div> 
  </Layout>
)

export default IndexPage

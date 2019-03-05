import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Portfolio from '../components/portfolio'
import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web developer`, `django developer`,'wordpress','vue', `react`]} />
  <div>
  <nav class="nav">
        <Link class="link" to="/resume"> Resume. </Link>
        <br/>
        <a>Portfolio.</a>
        <br/>
        <a>Blog.</a>
  </nav>
    <div class="main">
      
      <div class="main__wrapper">
        <h1>Luis  Torruella.</h1>
        <p> I help companies make the best products in the web. </p>
      </div>
      <hr/> 
    </div>
    
        
   <Portfolio/>
       

  </div> 

  </Layout>
)

export default IndexPage

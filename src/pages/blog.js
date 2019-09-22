import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Template from "../templates/blogTemplate"
import Footer from "../components/footer"
import Nav from "../components/nav"
import blog from '../assets/blog.css';
import Portfolio from "../components/portfolio"
//import { Link } from "gatsby"

const  BlogPage = ({siteTitile, summaries}) => {
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
      <Nav />
      <div className="content" style={{}}>
        {summaries.map((summary)=>(
         

          <section className="section">
            <h2 className="section-heading "> -{summary.title}
              <br/>
              <span className="dots">....</span>
            </h2>
        
            <p className="section-summary"> 
            {summary.desc}   
            </p>
          </section>
          ))}
      </div>

      <Footer />
    </Layout>
  )
}


BlogPage.propTypes={
  siteTitile: PropTypes.string
}


BlogPage.defaultProps = {
  siteTitile: ``,
  summaries:[
    {
      title:'Add Search In Django',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra auctor erat in commodo. Quisque aliquet porttitor www.hello.com arcu sed molestie. Nunc efficitur auctor venenatis.   Lorem ipsum dolor sit amet, consectetur adipiscing ..."
    }
  ]
}

export default BlogPage
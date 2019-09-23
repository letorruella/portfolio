import React from "react"
// import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Nav from "../components/nav"
import { Link } from "gatsby"
//import { Link } from "gatsby"

const BlogPosts = ({ data }) => {
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
        {data.allMarkdownRemark.edges.map(({ node }) => (
        <section className="section">
          <h2 className="section-heading ">
         <Link class="link brand" to={node.frontmatter.path}>  
            {" "}
            - {node.frontmatter.title} 
            <br />
            <span className="dots">....</span>
          </Link>
          </h2>

          <p className="section-summary" >{ node.frontmatter.summary}
          <br/>
          <em class="date">{node.frontmatter.date}</em>
          </p>
        </section>
      ))}
      </div>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
            path
            date(formatString:"MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
export default BlogPosts

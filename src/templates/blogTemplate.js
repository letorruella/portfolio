import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
  
    <Layout>
    <div 
    style={{
      "max-width":"850px",
      "margin":'auto'
    }}
    className="blog-post-container">
      <div 
      style={{
        "margin":"3rem"
      }}
      className="blog-post">
      <div 
        style={{
        "display":"flex",
        "justify-content":'space-between',
        "margin-bottom" : "10rem"
        }}
        >
       <div 
       style={{
        "border-left": "6px solid",
        "height": "20rem",
        "border-left" : "1rem solid"
       }}
       class="vl"></div>
        <h1 style={{
          "text-align":"right",
          "max-width": "35rem",
          "font-size" : "5.5rem"
        }}
        >{ frontmatter.title }</h1>
       </div>
        <div
          style={{
            "font-size": "2.5rem",
            "line-height":"1.5"
            
          }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    
    <Footer/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

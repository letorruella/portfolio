

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Template from "../templates/blogTemplate"
import Footer from "../components/footer"
//import { Link } from "gatsby"



export default function BlogPage({

})

{return (  
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
  
   <Footer />
  </Layout>
  )}




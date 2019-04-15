import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
  class="footer"
    style={{
    
      marginBottom: `1.45rem`,
    }}
  >
    <div class="footer-info"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <p >
        ©Luis Torruella 2037
        </p>    
      
        <Link
          to="https://github.com/letorruella"
          style={{
            color: `blue`,
            textDecoration: `none`,
          }}
        >
          github.com
        </Link>
        <br/>
        <Link
          to="https://linkedin.com/in/letorruella"
          style={{
            color: `blue`,
            textDecoration: `none`,
          }}
        >
          linkedin.com
        </Link>
     
    </div>
  </footer>
)


export default Footer

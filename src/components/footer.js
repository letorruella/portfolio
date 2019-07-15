
//import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
  class="footer"
    style={{
      'position':'absolute',
      'bottom':0,
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
      
        <a
          href="https://github.com/letorruella"
          style={{
            color: `blue`,
            textDecoration: `none`,
          }}
        >
          github.com
        </a>
        <br/>
        <a
          href="https://linkedin.com/in/letorruella"
          style={{
            color: `blue`,
            textDecoration: `none`,
          }}
        >
          linkedin.com
        </a>
     
    </div>
  </footer>
)


export default Footer

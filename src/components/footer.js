//import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    className="footer"
    style={{
      marginBottom: `1.45rem`,
     
    }}
  >
    <div
    className="footer-left">
      <ul className="pages">
        <li>Blog</li>
        <li>Portfolio</li>
        <li>Resume</li>
        
      </ul>

    </div>

    <div
      className="footer-right footer-info"
      
    >
      <p>
        made with :) <br /> by Luis Torruella
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
      <br />
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

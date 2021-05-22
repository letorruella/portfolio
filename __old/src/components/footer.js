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
     {/* <ul className="pages">
        <li>Blog</li>
        <li>Portfolio</li>
        <li>Resume</li>
        
      </ul>
      */}
    </div>

    <div
      className="footer-right footer-info"
      
    >
      <p>
        made with :) 
        
        
      </p>
      <a style={{'color':'rgb(107, 107, 107)', 'font-size':'1.7rem' }} href="/">Luis Torruella</a>
      <br/>
      <a
        href="mailto:letorruella@gmail.com"
        style={{
          color: `blue`,
          textDecoration: `none`,
        }}
      >
        gmail
      </a>
        <br/>
      <a
        href="https://github.com/letorruella"
        style={{
          color: `blue`,
          textDecoration: `none`,
        }}
      >
        github
      </a>
      <br />
      <a
        href="https://linkedin.com/in/letorruella"
        style={{
          color: `blue`,
          textDecoration: `none`,
        }}
      >
        linkedin
      </a>
    </div>
  </footer>
)

export default Footer

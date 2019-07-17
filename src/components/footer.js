
//import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
  class="footer"
    style={{
      
      marginBottom: `1.45rem`,
    }}
  >
  
  <div
  style={{
    "width":"50%"
  }}
  >
  <ul>
    <li>Blog</li>
    <li>Blog</li>
    <li>Blog</li>
  </ul>
  
  </div>
  
    <div class="footer-info"
      style={{
        margin: `0 auto`,
        'width': "50%",
        'text-align': 'right'
      }}
    >
        <p >
        made with :) <br/> by Luis Torruella 
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

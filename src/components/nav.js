import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav class="nav">
    <div>
     {/* <Link class="link" to="/resume">
        {" "}
        Resume.{" "}
      </Link>
      <br />
      <Link class="link" to="/">
        {" "}
        Portfolio.{" "}
      </Link>
      <br />
    */}  
      <Link class="link" to="/blog">
        {" "}
        Blog.{" "}
      </Link>
    </div>

    <h1 class=""> <Link className="link brand" to="/" >Luis Torruella. </Link></h1>
    
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav

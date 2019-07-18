import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav
    style={{
      width: "100%",
      height: "10rem",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: "grid",
        "grid-template-columns": "30% 70%",
        width: "100%",
        height: "100%",
      }}
    >
      <ul
        style={{
          "margin-left": "5rem",
          "margin-top": "2rem",
        }}
      >
        <li>Resume</li>
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>
      <h1
        style={{
          "grid-column": "2/-1",
          "text-align": "right",
          "margin-right": "5rem",
          "margin-top": "2rem",
          "font-size": "3.5rem",
        }}
      >
        Luis Torruella.
      </h1>
    </div>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav

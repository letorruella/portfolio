import PropTypes from "prop-types"
import React from "react"
/*import neighborhood from "../images/portfolio/neighborhood.png"
import myreads from "../images/portfolio/myreads.png"
import freeloader from "../images/portfolio/freeloader.png"
import tskrrr from "../images/portfolio/tskrrr.png"
import agency from "../images/portfolio/11-agency.png"*/

//import Img from "gatsby-image"//
//import { graphql } from 'gatsby';

const Main = ({ siteTitle}) => (
  <div class="">
   <h1 style={{'text-transform':'uppercase'}}>{siteTitle}</h1> 
  </div>
)

Main.propTypes = {
  siteTitle: PropTypes.string,
}

Main.defaultProps = {
  siteTitle: `The Box Way Show`,
  portfolios: [
    
  ],
}

export default Main

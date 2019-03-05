
import PropTypes from "prop-types"
import React from "react"

const Portfolio = ({ siteTitle }) => (
  <portfolio class="portfolio"> 
  <hr/>
   <section class="portfolio_container">
    <div class="portfolio_left">
      <h1>-Neightborhood</h1>
      <p>Apparently we had reached a great height in the atmosphere, 
        for the sky was a dead black, and the stars had ceased to twinkle. 
        By the same illusion which lifts
        the horizon of the sea to the level of the spectator on a hillside.
      </p>
      <div class="tags">
        <a>knockout</a>
        <a>source</a>
      </div>  
    </div>
    <div class="portfolio_right">
      <div class="img-container"></div>
    </div>
  </section>
   
  </portfolio>
)

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
}

export default Portfolio

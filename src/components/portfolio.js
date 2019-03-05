import PropTypes from "prop-types"
import React from "react"
import neighborhood from "../images//neighborhood.png"

const Portfolio = ({ siteTitle, portfolio01 }) => (
  <portfolio class="portfolio">
    <section class="portfolio_container">
      <div class="portfolio_left">
        <h1>{portfolio01.title}</h1>
        
        <p>
         {portfolio01.desc}
        </p>
       <a href={portfolio01.source}>source.</a>
        <div class="tags">
       <br/>
        {portfolio01.tags.map((t)=>(

          <a class>{t}</a>
        ))}

        </div>
      </div>
      <div class="portfolio_right">
        <div class="img-container" />
      </div>
    </section>
  </portfolio>
)

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
  portfolio01:{
    title:'-Neighborhood.',
    desc:`Levarging the power of google maps and foursquare 
    to show the most interesting areas in my neightborhood.
    User have the ability to search and learn about this places.`,
    tags:['knockout', 'googleapi', 'foursquare'],
    source:'https://github.com/letorruella/neighborhood'
  },
    

}

export default Portfolio

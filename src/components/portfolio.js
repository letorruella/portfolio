import PropTypes from "prop-types"
import React from "react"
import neighborhood from '../images/neighborhood.png';
import freeloader from '../images/freeloader.png';
import myreads from '../images/myreads.png';


const Portfolio = ({ siteTitle, portfolios, data }) => (
  <portfolio class="portfolio">
   
      {portfolios.map(portfolio => (
         <section class="portfolio_container">
        <div class="portfolio_info">
          <h1>{portfolio.title}</h1>
          <p>{portfolio.desc}</p>
          <a href={portfolio.source}>source.</a>
          <div class="tags">
            <br />
            {portfolio.tags.map(t => (
              <a class>{t}</a>
            ))}
          </div>
        </div>
        <div class="portfolio_image">
        
              <img  src={portfolio.img}/>
        </div>
        </section>
      ))}
  </portfolio>
)

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
  portfolios: [
    {
      title: "-Neighborhood.",
      desc: `Levarging the power of google maps and foursquare 
    to show the most interesting areas in my neightborhood.
    User have the ability to search and learn about this places.`,
      tags: ["knockout", "googleapi", "foursquare"],
      source: "https://github.com/letorruella/neighborhood",
      img: neighborhood,
  
    },
    {
      title: "-My Reads.",
      desc: `Thanks to react I was able to make an SPA that chnages based of the data given, 
      The user has the ability look for her/his favorite books and keep a track of them. Search the database, save them in different
       shelves(read, curreltly reading, want to read).`,
      tags: ["React", "Reactrouter", "Create React App"],
      source: "https://github.com/letorruella/my-reads",
      img:myreads,
    },
  ],
}


export default Portfolio

import PropTypes from "prop-types"
import React from "react"
import neighborhood from "../images/neighborhood.png"
import myreads from "../images/myreads.png"

const Portfolio = ({ siteTitle, portfolios, data }) => (
  <portfolio class="portfolio">
    {portfolios.map((portfolio, index) => (
    
      <section class="portfolio_container" id={`portfolio-${index}`}>
        <h1 class="portfolio_container-title">{portfolio.title}</h1>
        <div class="portfolio_info">
          <p clas="portfolio_info-desc">{portfolio.desc}</p>
          <a class="portfolio_info-source" href={portfolio.source}>
            source.
          </a>
          <div class="tags">
            <br />
            {portfolio.tags.map(t => (
              <a class>{t}</a>
            ))}
          </div>
          
        </div>

        <img src={portfolio.img} />
      
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
      title: "Neighborhood.",
      desc: `Levarging the power of google maps and foursquare 
    to show the most interesting areas in my neightborhood.
    User have the ability to search and learn about this places.`,
      tags: ["knockout", "googleapi", "foursquare"],
      source: "https://github.com/letorruella/neighborhood",
      img: neighborhood,
    },
    {
      title: "My Reads.",
      desc: `Thanks to react I was able to make an SPA that chnages based of the data given, 
      The user has the ability look for her/his favorite books and keep a track of them. Search the database, save them in different
       shelves(read, curreltly reading, want to read).`,
      tags: ["React", "Reactrouter", "Custom API"],
      source: "https://github.com/letorruella/my-reads",
      img:myreads,
    },
    {
      title: "Freeloader.",
      desc: `Thanks to react I was able to make an SPA that chnages based of the data given, 
      The user has the ability look for her/his favorite books and keep a track of them. Search the database, save them in different
       shelves(read, curreltly reading, want to read).`,
      tags: ["React", "Reactrouter", "Custom API"],
      source: "https://github.com/letorruella/my-reads",
      img:myreads,
    },
    {
      title: "Tskrr.",
      desc: `Thanks to react I was able to make an SPA that chnages based of the data given, 
      The user has the ability look for her/his favorite books and keep a track of them. Search the database, save them in different
       shelves(read, curreltly reading, want to read).`,
      tags: ["React", "Reactrouter", "Custom API"],
      source: "https://github.com/letorruella/my-reads",
      img:myreads,
    },
  ],
}

export default Portfolio

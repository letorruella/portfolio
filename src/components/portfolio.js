import PropTypes from "prop-types"
import React from "react"
import neighborhood from "../images/neighborhood.png"
import myreads from "../images/myreads.png"
import freeloader from '../images/freeloader.png'
import tskrrr from '../images/tskrrr.png'

const Portfolio = ({ siteTitle, portfolios, data }) => (
  <portfolio class="portfolio">
    {portfolios.map((portfolio, index) => (
    
      <section class="portfolio_container" id={`portfolio-${index}`}>
        <h1 class="portfolio_container-title">{portfolio.title}</h1>
        <div class="portfolio_info">
          <p clas="portfolio_info-desc">{portfolio.desc}</p>
          <a class="portfolio_info-source" href={portfolio.source.source}>
         { portfolio.source.type} 
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
      title: "Tskrr.",
      desc: `What started as a basic backend for a "Uber Eats" clone is getting developed further to show
      employers and clients my abilities. A full fledge app built by me,  fullstack from Database to CSS`,
      tags: ["Vue Cli", "Django", "Postgres","Heroku", "Bullma"],
      source: {
        "type":"learn more",
        "source":"tskrr"
      },
      img:tskrrr,
      status: "currently developing it"
    },
    {
      title: "Freeloader.",
      desc: `Freeloader is a platform that allows users(mainly) truck drivers access to information that is usually behind paywalls. 
     
      `,
      tags: ["Django", "Nanobox", "Nginx", "Postgres"],
      source:{
        "type":"learn more",
        "source":"freeloader.nanobox.io"
      },
      img:freeloader,
    },
    {
      title: "Neighborhood.",
      desc: "Created a fun engagin User interface where users can see all the interesting place in my local neighborhood",
      tags: ["knockout", "googleapi", "foursquare"],
      source:{
        "type":"source",
        "source":"https://github.com/letorruella/neighborhood"
      },
     
      img: neighborhood,
    },
    {
      title: "My Reads.",
      desc: `Thanks to react I was able to make an SPA that chnages based of the data given, 
      The user has the ability look for her/his favorite books and keep a track of them. Search the database, save them in different
       shelves(read, curreltly reading, want to read).`,
      tags: ["React", "Reactrouter", "Custom API"],
      source:{
        "type":"source",
        "source":"https://github.com/letorruella/myreads"
      },
      img:myreads,
    },
  
   
  ],
}

export default Portfolio

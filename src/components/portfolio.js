import PropTypes from "prop-types"
import React from "react"
import neighborhood from "../images/portfolio/neighborhood.png"
import myreads from "../images/portfolio/myreads.png"
import freeloader from '../images/portfolio/freeloader.png'
import tskrrr from '../images/portfolio/tskrrr.png'

//import Img from "gatsby-image"
import { graphql } from 'gatsby';

const Portfolio = ({ siteTitle, portfolios, data }) => (
  <portfolio class="portfolio">
    {portfolios.map((portfolio, index) => (
    
      <section class="portfolio_container" id={`portfolio-${index}`}>
        <h1 class="portfolio_container-title">{portfolio.title}</h1>
        <div class="portfolio_info">
          <p clas="portfolio_info-desc">{portfolio.desc}</p>
          <a class="portfolio_info-source" href={portfolio.source.source} >
         { portfolio.source.type} 
          </a>
          <div class="tags">
            <br />
            {portfolio.tags.map(t => (
              <a class>{t}</a>
            ))}
          </div>
          
        </div>

        <img 
        alt={portfolio.title}
        src={portfolio.img}/>     

              
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
      desc: `What started as a basic backend for a "Uber Eats" clone for truckdrivers is getting developed further to show 
      potential employers and clients my abilities. A full fledge app built by me,  fullstack from Database to CSS`,
      tags: ["vue cli", "django", "sass", "bullma"],
      source: {
        "type":"learn more",
        "source":"http://tskrr-app.herokuapp.com/"
      },
      img:tskrrr,
      status: "currently developing it"
    },
    {
      title: "Freeloader.",
      desc: `Freeloader is a platform that allows users(mainly) truck drivers access to information that is usually behind paywalls. 
     
      `,
      tags: ["django", "nanobox", "nginx", "postgres"],
      source:{
        "type":"learn more",
        "source":"http://freeloader.nanoapp.io"
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
      desc: `Thanks to react I was able to make an SPA that changes based of the data given, 
      The user has the ability look for her/his favorite books and keep a track of them. Search the database, save them in different
       shelves(read, curreltly reading, want to read).`,
      tags: ["react", "reactrouter", "custom api"],
      source:{
        "type":"source",
        "source":"https://github.com/letorruella/myreads"
      },
      img:myreads,
    },
  
   
  ],
}

export default Portfolio




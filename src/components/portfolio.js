import PropTypes from "prop-types"
import React from "react"
import neighborhood from '../images/neighborhood.png';


const Portfolio = ({ siteTitle, portfolios, data }) => (
  <portfolio class="portfolio">
   
      {portfolios.map(portfolio => (
         <section class="portfolio_container">
        <div class="portfolio_left">
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
        <div class="portfolio_right">
              <img  src={neighborhood}/>
        </div>
        </section>
      ))}

      {/**
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
      <div class="portfolio_right">
        <div class="img-container" />
        **/}
   
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
  
    },
    {
      title: "-My Reads.",
      desc: `Levarging the power of google maps and foursquare 
    to show the most interesting areas in my neightborhood.
    User have the ability to search and learn about this places.`,
      tags: ["React", "Reactrouter", "Create React App"],
      source: "https://github.com/letorruella/my-reads",
    },
  ],
}


export default Portfolio

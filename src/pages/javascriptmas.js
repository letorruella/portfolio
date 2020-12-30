import PropTypes from "prop-types"
import React from "react"
import Footer from "../components/footer"
import '../components/main.css';

function JavaScriptmas(props) {
  const { links } = props
  return (
    <>
      <div className="javascriptmas-container">
        <div className="content">
          <div className="top">
            <h1>24 Days of</h1>
            <h1>#JavaScriptmas</h1>
            <h3>had tons of fun making this :)</h3>
          </div>
          <div className="bottom">
            <ol>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      <Footer />
      </div>
    </>
  )
}

JavaScriptmas.propTypes = {
  siteTitle: PropTypes.string,
}

JavaScriptmas.defaultProps = {
  links: [
    {
      title: "Candies",
      url: "https://scrimba.com/scrim/co1c74fabab601e07fcda2645",
    },
    {
      title: "Deposit Profits",
      url: "https://scrimba.com/scrim/cofea4aaaabb808a410a422c2",
    },
    {
      title: "Chunky Monkey",
      url: "https://scrimba.com/scrim/co2404ae7a965f32e74eee088",
    },
    {
      title: "Century From Year",
      url: "https://scrimba.com/scrim/cofa841ed9663c040dd82645a",
    },
    {
      title: "Reverse String",
      url: "https://scrimba.com/scrim/co63e4a8bba11027b35fbaf54",
    },
    {
      title:'Sort By Length',
      url:"https://scrimba.com/scrim/co31c4ed08d3550599d823175"
    },
    {
      title:'Count Vowel',
      url:'https://scrimba.com/scrim/co9484b048f6f5694c64f61d9'
    }
  ],
}

export default JavaScriptmas

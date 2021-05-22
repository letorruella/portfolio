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
    },
    {
      title:'The Rolling Dice',
      url: 'https://scrimba.com/scrim/co60148fb9b02dd19e03237ebç'
    },
    {
      title:'Some Odd Fibonacci Numbers',
      url: 'https://scrimba.com/scrim/co249416fa313d0ebbd92c507'
    },
    {
      title:'Adjancent Elements Product',
      url: 'https://scrimba.com/scrim/cof614608885c233eb81ae844'
    },
    {
      title:'Advoid Obstacle',
      url: 'https://scrimba.com/scrim/co1d24d9d8cb89cfad29d18ad'
    },
    {
      title:'Extract Each Kth',
      url: 'https://scrimba.com/scrim/coa4b46b3b61174f0605ec8f2'
    },
    {
      title:'Maximal Adjacent Difference',
      url: 'https://scrimba.com/scrim/co74e4b0385146774c2a4587b'
    },
    {
      title:'Carousel',
      url: 'https://scrimba.com/scrim/co84644e582985949ece05196'
    },
    {
      title:'Insert Dashes',
      url: 'https://scrimba.com/scrim/cocba4b2f8ad3ec753a8dda7a'
    },
    {
      title:'Maximal Adjacent Difference',
      url: 'https://scrimba.com/scrim/co74e4b0385146774c2a4587b'
    },
    {
      title:'Different Symbols Naive',
      url: 'https://scrimba.com/scrim/co7824d47be5545c3340d8b62'
    },
    {
      title:'Array Previous Less',
      url: 'https://scrimba.com/scrim/co2084138a5515079759bf40d'
    },
    {
      title:'Alphabet Subsequence',
      url: 'https://scrimba.com/scrim/co47b4cb58b2d640b60538f6b'
    },
    {
      title:'Domain Type',
      url: 'https://scrimba.com/scrim/cod8549a1aaa46e1ec32f5b5d'
    },
    {
      title:'Sum Of Two',
      url: 'https://scrimba.com/scrim/coc2e4df4aa8d071a03fdc4da'
    },
    {
      title:'Extract Matrix Column',
      url: 'https://scrimba.com/scrim/coa6f4d3f98597f6ee60a4812'
    },
    {
      title:'Social Media Input',
      url: 'https://scrimba.com/scrim/coa51493a8a01a8d8cab3907f'
    },
    {
      title:'Test Your Agility',
      url:'https://scrimba.com/scrim/co98d4bd8869f56e10f5beb5e'
    }
  ],
}

export default JavaScriptmas

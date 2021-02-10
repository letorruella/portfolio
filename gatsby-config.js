const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Luis Torruella Web developer`,
    description: `I help companies create the best products in the web`,
    author: `Luis Enrique Torruella`,
  },
  plugins: [
   /* {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Slabo+27px`,
          },
        ],
      },
    },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },

    `gatsby-transformer-remark`,

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

  

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Luis Torruella Web developer`,
    description: `I help companies create the best products in the web`,
    author: `Luis Enrique Torruella`,
  },
  plugins: [  
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Slabo+27px`,
          },
         
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images` ,
      },
    },

     
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/blog`,
          name: "blog",
        },
      },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp' , 

  
    `gatsby-transformer-remark`,
   
    `gatsby-plugin-netlify-cms`,
    
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


module.exports = {
  siteMetadata: {
    title: `The Box Way Show`,
    description: `Watch Speed Videos From Over My shoulder`,
    author: `Luis Enrique Torruella`,
  },
  plugins: [  
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            "variants": [
              "400",
              "400i",
              "700",
              "700i",
              "900"
            ],
            "subsets": [
              "latin-ext"
            ]
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
   

  
    `gatsby-transformer-remark`,
   
   
    
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

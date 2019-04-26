const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Luis Torruella Web developer`,
    description: `I help companies creeate the best products in the web`,
    author: `Luis Enrique Torruella`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

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

    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts/blog/`,
        name: "markdown-pages",
      },
    }*/
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
   `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    /*
    {resolve: "gatsby-source-wordpress",
    options: {
      
      baseUrl: "gatsbyjsexamplewordpress.wordpress.com",
      
      protocol: "http",
      hostingWPCOM: false,
      useACF: true,
      acfOptionPageIds: [],
      auth: {
        htaccess_user: "your-htaccess-username",
        htaccess_pass: "your-htaccess-password",
        htaccess_sendImmediately: false,
        wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
        wpcom_app_clientId: "54793",
        wpcom_user: "gatsbyjswpexample@gmail.com",
        wpcom_pass: process.env.WORDPRESS_PASSWORD,
        jwt_user: process.env.JWT_USER,
        jwt_pass: process.env.JWT_PASSWORD,
        jwt_base_path: "/jwt-auth/v1/token", 
      },
      verboseOutput: false,
      perPage: 100,
      searchAndReplaceContentUrls: {
        sourceUrl: "https://source-url.com",
        replacementUrl: "https://replacement-url.com",
      },
      concurrentRequests: 10,
      includedRoutes: [
        "**categories",
        "**posts",
        "**pages",
        "**media",
        "**tags",
        "**taxonomies",
        "**users",
      ],
      excludedRoutes: ["*posts/1456"],
      normalizer: function({ entities }) {
        return entities
      },
    }
    }*/ 
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: [ 'Slabo 27px', 'serif' ]
      }
    }
  },

  

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

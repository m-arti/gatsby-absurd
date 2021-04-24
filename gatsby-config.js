const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Martins Samuel`,
    author: `Martins Samuel`,
    description: `Martins Samuel`,
    homepage: `https://martinssamuel.com`,
    siteUrl: `https://martinssamuel.com`,
  },

  plugins: [

    `gatsby-plugin-styled-components`,

    // gatsby-plugin-sitemap
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/static', '/page-2'],
      },
    },

    // gatsby-plugin-feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allSite } }) => {
              return allSite.edges.map(edge => {
                return Object.assign({}, edge.node.siteMetadata, {
                  description: edge.node.description,
                  url: site.siteMetadata.siteUrl,
                  guid: site.siteMetadata.siteUrl,
                })
              })
            },
            query: `
              {
                allSite {
                  edges {
                    node {
                      siteMetadata {
                        siteUrl
                        author
                        description
                        homepage
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Martins Samuel – RSS Feed",
          },
        ],
      },
    },

    // gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
      },
    },

    // gatsby-source-filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/src/images/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `art`,
        path: `${__dirname}/src/images/art`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martins Samuel`,
        short_name: `Martins Samuel`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },

    // gatsby-plugin-google-fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `nanum myeongjo\:400,700,800`,
          `work sans\:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700, 700i,800,800i,900,900i`
        ],
      },
    },

    // gatsby-plugin-alias-imports
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@static': path.resolve(__dirname, 'static/'),
        },
      },
    },
  ],
};

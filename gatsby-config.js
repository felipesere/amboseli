var moment = require('moment')
var revision = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString().trim()

module.exports = {
  siteMetadata: {
    title: 'felipesere.com',
    author: 'Felipe Sere',
    description: 'Felipes path to mastery',
    siteUrl: 'https://felipesere.com',
    twitterHandle: '@felipesere',
    gitSha: revision,
    buildTime: moment().toISOString(),
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                elm: 'haskell',
                sh: 'bash',
              },
              noInlineHighlight: true,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              providers: {
                include: ['Twitter'],
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `felipesere.com`,
        short_name: `P2M`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-netlify`
  ],
}

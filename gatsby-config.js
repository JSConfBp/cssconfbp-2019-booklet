
module.exports = {
  siteMetadata: {
    siteUrl: 'http://2015.jsconfbp.com/cssconfbp-2019-booklet',
    title: 'Info Screen',
    description: '',
    keywords: '',
  },
  pathPrefix: `/cssconfbp-2019-booklet`,
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`speaker-images`,
        path: `${__dirname}/speakers/images`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "speakers",
        path: `${__dirname}/speakers`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/images`,
          }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jsconf-budapest-booklet',
        short_name: 'jsconfbp-booklet',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/img/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/images`,
          }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            variants: [`300`,`400`,`700`]
          },
        ],
      },
    }
  ],
}

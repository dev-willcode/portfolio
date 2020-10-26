/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-material-ui`, `gatsby-plugin-styled-components`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/images`,
      name: "images",
    },
  }],
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Obino energies`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Chauffagiste à votre service - Interventions dans le Nord et le Pas-de-Calais`,
    image: `/images/icon.png`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("autoprefixer")]
      },
    },

  ]
};
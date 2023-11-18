module.exports = {
  siteMetadata: {
    title: `Zapisuj długi swoich znajomych | Zeszycik`,
    description: `Za pomocą aplikacji możesz w bardzo prosty i szybki sposób spisywać i edytować należności swoich znajomych.`,
    author: `@sebastiangolab`,
    siteUrl: `https://zeszycik.sebastiangolab.pl/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-image`,
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
        name: `zeszycik`,
        short_name: `zeszycik`,
        start_url: `/`,
        background_color: `#e2395f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}

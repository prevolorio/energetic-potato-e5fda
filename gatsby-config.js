require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `BH`,
        description: `A One-page Gatsby starter built with Tailwindcss and  Postcss.`,
        author: `The Bakerdev`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `material icons`,  
                `Rubik\:400,700`
              ],
              display: 'swap'
            }
        },
        "gatsby-plugin-postcss",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-resolve-src",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Zenii Gatsby`,
                short_name: `zenii`,
                start_url: `/`,
                background_color: `#6C63FF`,
                theme_color: `#6C63FF`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`,
            }
        },
        {
            resolve: 'gatsby-plugin-tidio-chat',
            options: {
              tidioKey: 'dgxpqt69vvxgljsspbydydsj2wt8hxul',
              enableDuringDevelop: false, // Optional. Disables Tidio chat widget when running Gatsby dev server. Defaults to true.
            },
          },
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
          `@contentful/gatsby-transformer-contentful-richtext`,
    ],
};

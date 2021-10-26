module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description: "Here is my learning process of React, GraphQl, Gatsby and web development in general.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
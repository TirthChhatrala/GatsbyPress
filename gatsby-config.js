module.exports = {
  siteMetadata: {
    title: "My Gatsby Blog",
    description: "A simple blog built with Gatsby and Markdown",
    author: "Tirth Chhatrala",
    siteUrl: "http://localhost:8000",
  },
  plugins: [
    // Images
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Markdown source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/posts`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,

    // RSS Feed
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
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map(node => ({
                title: node.frontmatter.title,
                description: node.excerpt,
                date: node.frontmatter.date,
                url:
                  site.siteMetadata.siteUrl +
                  "/" +
                  node.frontmatter.slug,
              })),
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      title
                      date
                      slug
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "My Gatsby Blog RSS Feed",
          },
        ],
      },
    },
  ],
}

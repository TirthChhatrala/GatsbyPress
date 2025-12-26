import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Search from "../components/Search"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title="Home" description="Latest blog posts" />

      <h1>Blog Posts</h1>
      <Search />

      {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link to={`/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <p>{post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
          <Link to={`/${post.frontmatter.slug}`}>Read more →</Link>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt(pruneLength: 120)
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

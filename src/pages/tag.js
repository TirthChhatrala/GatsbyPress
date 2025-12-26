import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function TagPage({ data, pageContext }) {
  return (
    <Layout>
      <h1>Tag: {pageContext.tag}</h1>

      {data.allMarkdownRemark.nodes.map(post => (
        <h3 key={post.id}>
          <Link to={`/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </h3>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

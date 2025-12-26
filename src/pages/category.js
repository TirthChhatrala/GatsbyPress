import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function CategoryPage({ data, pageContext }) {
  return (
    <Layout>
      <h1>Category: {pageContext.category}</h1>

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
  query ($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
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

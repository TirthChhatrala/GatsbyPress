import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function BlogTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>

      <p>
        Category:{" "}
        <Link to={`/category/${post.frontmatter.category}`}>
          {post.frontmatter.category}
        </Link>
      </p>

      <p>
        Tags:{" "}
        {post.frontmatter.tags.map(tag => (
          <Link key={tag} to={`/tag/${tag}`} style={{ marginRight: 8 }}>
            #{tag}
          </Link>
        ))}
      </p>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        tags
      }
    }
  }
`

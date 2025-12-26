import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function BlogPage({ data, pageContext }) {
  const posts = data.allMarkdownRemark.nodes
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />

      {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link to={`/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <p>{post.excerpt}</p>
        </article>
      ))}

      <div className="pagination">
  {Array.from({ length: numPages }).map((_, i) => {
    const pageNumber = i + 1
    const link = i === 0 ? "/" : `/page/${pageNumber}`

    return (
      <Link
        key={pageNumber}
        to={link}
        className={
          pageNumber === currentPage
            ? "pagination-link active"
            : "pagination-link"
        }
      >
        {pageNumber}
      </Link>
    )
  })}
</div>

    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 120)
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

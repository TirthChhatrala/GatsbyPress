import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Search() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  const [query, setQuery] = useState("")

  const results = data.allMarkdownRemark.nodes.filter(post =>
    post.frontmatter.title
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {query &&
        results.map(post => (
          <div key={post.id}>
            <Link to={`/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </div>
        ))}
    </div>
  )
}

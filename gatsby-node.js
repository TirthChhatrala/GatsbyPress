const path = require("path")

const POSTS_PER_PAGE = 3

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            slug
            category
            tags
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading markdown posts", result.errors)
    return
  }

  // ✅ All posts
  const posts = result.data.allMarkdownRemark.nodes

  // ✅ Filter posts that have slug
  const validPosts = posts.filter(
    post => post.frontmatter && post.frontmatter.slug
  )

  /* --------------------------------
     BLOG POST PAGES
  --------------------------------- */
  validPosts.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  /* --------------------------------
     PAGINATION
  --------------------------------- */
  const numPages = Math.ceil(validPosts.length / POSTS_PER_PAGE)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: path.resolve(`src/pages/page.js`),
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        currentPage: i + 1,
        numPages,
      },
    })
  })

  /* --------------------------------
     CATEGORIES & TAGS
  --------------------------------- */
  const categories = new Set()
  const tags = new Set()

  validPosts.forEach(post => {
    if (post.frontmatter.category) {
      categories.add(post.frontmatter.category)
    }
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach(tag => tags.add(tag))
    }
  })

  categories.forEach(category => {
    createPage({
      path: `/category/${category}`,
      component: path.resolve(`src/pages/category.js`),
      context: { category },
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `/tag/${tag}`,
      component: path.resolve(`src/pages/tag.js`),
      context: { tag },
    })
  })
}

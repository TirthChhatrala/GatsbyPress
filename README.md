# 🚀 Gatsby Blog Website

A **modern, fast, and SEO-friendly blog website** built using **GatsbyJS** and **Markdown**.  
This project demonstrates real-world Gatsby concepts like **static site generation, pagination, search, dark mode, tags, categories, and RSS feeds**.

---

## 📸 Preview

A clean, responsive blog with:
- Sticky navigation bar
- Dark / Light mode
- Search functionality
- Paginated blog posts
- Category & tag filtering

---

## 🧰 Tech Stack

- **GatsbyJS** – Static Site Generator
- **ReactJS** – UI Components
- **GraphQL** – Build-time data fetching
- **Markdown** – Blog content
- **CSS (Custom)** – Modern responsive styling

---

## ✨ Features

✅ Static Site Generation (SSG)  
✅ Markdown-based blog posts  
✅ SEO optimization  
✅ Pagination  
✅ Search functionality  
✅ Dark / Light mode  
✅ Tags & Categories  
✅ RSS Feed (`/rss.xml`)  
✅ Responsive design  
✅ Clean & modern UI  

---

## 📂 Project Structure
```bash
gatsby-blog/
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-browser.js
├── src/
│ ├── pages/
│ │ ├── index.js
│ │ ├── page.js
│ │ ├── category.js
│ │ └── tag.js
│ ├── templates/
│ │ └── blog-template.js
│ ├── components/
│ │ ├── Layout.js
│ │ ├── SEO.js
│ │ ├── Search.js
│ │ └── ThemeToggle.js
│ ├── blog/
│ │ └── posts/
│ │ ├── my-first-gatsby-blog.md
│ │ └── other-posts.md
│ └── styles/
│ └── global.css
```


---

## 📝 Blog Content

Blog posts are written in **Markdown** with frontmatter:

```bash
---
title: "My First Gatsby Blog"
slug: "my-first-gatsby-blog"
date: "2025-01-01"
category: "Gatsby"
tags: ["gatsby", "react", "static-site"]
---
```

## 🔍 Search

- Client-side search
- Filters posts by title in real time
- No external libraries required

## 📄 Pagination

- Clean numbered pagination
- Active page highlight
- Mobile-friendly UI
- Scales for large blogs


## 🌙 Dark Mode

- Toggle between light and dark themes
- Uses CSS variables
- Smooth transitions
- Saves user preference

## 🏷️ Categories & Tags

- Dynamic category pages
```bash
/category/Gatsby
```

- Dynamic tag pages
```bash
/tag/react
```

## 📡 RSS Feed

- RSS feed is automatically generated:
```bash
/rss.xml
```
- Perfect for blog readers and SEO.

## 🚀 Getting Started
### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run development server
```bash
npm run develop
```

### 3️⃣ Open in browser
```bash
http://localhost:8000
```

## 🛠️ Build for Production
```bash
gatsby build
gatsby serve
```

## 🌍 Deployment

This project can be deployed on:
- Netlify
- Vercel
- GitHub Pages

Build command:
```bash
gatsby build
```

## 📈 Learning Outcomes

This project helped me understand:
- Gatsby architecture
- GraphQL at build time
- Static vs dynamic websites
- Programmatic page creation
- SEO best practices
- Modern UI styling

## 👤 Author

### Tirth Chhatrala
Full-stack developer passionate about modern web technologies.



## 📜 License

This project is open-source and available under the MIT License.
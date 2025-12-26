---
title: "Building Accessible Websites with Gatsby"
slug: "gatsby-accessibility-guide"
date: "2025-04-05"
category: "Accessibility"
tags: ["gatsby", "a11y", "accessibility", "inclusive"]
---

Web accessibility (a11y) ensures that people with disabilities can perceive, understand, navigate, and interact with your website. Gatsby provides excellent tools to build accessible sites from the ground up.

## 🎯 Why Accessibility Matters

### Legal Requirements
- ADA (Americans with Disabilities Act)
- Section 508 (US government)
- WCAG 2.1 (International standard)
- AODA (Canada)

### Business Benefits
- **20% of population** has some disability
- **Better SEO** - accessible sites rank better
- **Mobile friendly** - many a11y practices improve mobile UX
- **Future-proofing** - accessible sites work with new technologies

### Moral Imperative
The web should be for everyone, regardless of ability.

## 🛠️ Gatsby Accessibility Tools

### 1. `gatsby-plugin-react-helmet`
Manage document titles for screen readers.

### 2. `gatsby-plugin-axe`
Accessibility testing during development.

### 3. `eslint-plugin-jsx-a11y`
ESLint rules for JSX accessibility.

### 4. `@reach/router` (built into Gatsby)
Accessible routing components.

## ♿ Core Accessibility Principles

### 1. Perceivable
Information must be presentable to users in ways they can perceive.

#### Semantic HTML
```jsx
// Bad
<div onClick={handleClick}>Click me</div>

// Good
<button onClick={handleClick}>Click me</button>
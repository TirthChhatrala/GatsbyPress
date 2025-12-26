import React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./ThemeToggle"
import Search from "../components/Search"

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <header className="navbar">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            My Gatsby Blog
          </a>
        </div>

        <div className="navbar-center">
          <Search />
        </div>

        <div className="navbar-right">
          <ThemeToggle />
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <hr />
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

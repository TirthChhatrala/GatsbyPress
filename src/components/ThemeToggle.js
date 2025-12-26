import React, { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.body.className = dark ? "dark" : ""
  }, [dark])

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  )
}

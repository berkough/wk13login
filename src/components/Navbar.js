import React from "react"

const Navbar = () => {
  return (
    <nav className="nav">
        <a href='/' className="nav-title">Legal Beagle</a>
      <ul>
        <li><a href='/about'>About</a></li>
        <li><a href='/readme'>Read Me</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
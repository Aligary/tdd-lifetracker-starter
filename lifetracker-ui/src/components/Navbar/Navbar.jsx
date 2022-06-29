import * as React from "react"
import "./Navbar.css"
import logo from "../../img/logo.jpg"

export default function Navbar() {
  return (
    <nav className="navbar">
        navbar
        <div className="content">
          <div className="logo">
            <img src={logo} ></img>
          </div>
          <ul className="links">

          </ul>
        </div>
    </nav>
  )
}


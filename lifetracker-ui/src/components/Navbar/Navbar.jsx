import * as React from "react"
import "./Navbar.css"
import logo from "../../img/logo.jpg"

import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt ="logo" width="60"/>
            </Link>
          </div>
          <NavLinks />
        </div>
    </nav>
  )
}

export function NavLinks() {
  let isLoggedIn =false;

  return (
    <div className="nav-links">
      <li>
        <Link to="/activity">Activity</Link>
      </li>
      <li>
        <Link to="/exercise">Exercise</Link>
      </li>
      <li>
        <Link to="/nutrition">Nutrition</Link>
      </li>
      <li>
        <Link to="/sleep">Sleep</Link>
      </li>

      {isLoggedIn ?
        <div>
          <button className="checkout-button" >Log Out</button>
        </div>
        :
        <div>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </div>
        
      }
      
    </div>
  )
  
}


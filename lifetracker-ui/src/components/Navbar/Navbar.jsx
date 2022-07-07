import * as React from "react"
import "./Navbar.css"
import logo from "../../img/logo.jpg"

import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className="navbar">
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt ="logo" width="60"/>
            </Link>
          </div>
          <NavLinks isLoggedIn={props.isLoggedIn}/>
        </div>
    </nav>
  )
}

export function NavLinks(props) {

  return (
    <div className="nav-links">
        <Link to="/activity">Activity</Link>
        <Link to="/exercise">Exercise</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/sleep">Sleep</Link>
      {props.isLoggedIn ?
          <button className="logout-button" >Log Out</button>
        :
        <div className="nav-links">
            <Link to="/login">Login</Link>
            <div className="btn secondary">
              <Link to="/register">Sign Up</Link>
            </div>
        </div>
        
      }
      
    </div>
  )
  
}


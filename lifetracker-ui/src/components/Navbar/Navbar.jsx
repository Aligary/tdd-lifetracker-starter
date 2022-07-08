import * as React from "react"
import "./Navbar.css"
import logo from "../../img/logo.jpg"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuthContext } from "components/contexts/auth"

export default function Navbar(props) {
  const {user} = useAuthContext()
  const navigate = useNavigate()

  const logoutUser = async () => {
    props.setIsLoggedIn(false)

    navigate("/")
  }
  return (
    <nav className="navbar">
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt ="logo" width="60"/>
            </Link>
          </div>
          <NavLinks isLoggedIn={props.isLoggedIn} logoutUser={logoutUser}/>
        </div>
    </nav>
  )
}

export function NavLinks(props) {
  const {user} = useAuthContext()

  return (
    <div className="nav-links">
        <Link to="/activity">Activity</Link>
        <Link to="/exercise">Exercise</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/sleep">Sleep</Link>
      {user ?
          <button className="logout-button" onClick={props.logoutUser} >Log Out</button>
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


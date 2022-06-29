import LoginForm from "components/LoginForm/LoginForm"
import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./LoginPage.css"

export default function LoginPage(props) {
  const navigate = useNavigate()
  return (
    <div className="login-page">
        {
          props.isLoggedIn ?
          useEffect(() => {navigate("/activity") ,[]}) 
          : <LoginForm />
        }
    </div>
  )
}


import * as React from "react"
import "./RegistrationPage.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"

export default function RegistrationPage(props) {
  const navigate = useNavigate()
  return (
    <nav className="registration-page">
        {
          props.isLoggedIn ?
          useEffect(() => {navigate("/activity") ,[]}) 
          : <RegistrationForm />
        }
    </nav>
  )
}


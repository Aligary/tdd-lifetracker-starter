import * as React from "react"
import "./RegistrationPage.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"
import { useAuthContext } from "components/contexts/auth"

export default function RegistrationPage(props) {
  const navigate = useNavigate()
  const {user} = useAuthContext()
  
  return (
    <nav className="registration-page">
        {
          user ?
          useEffect(() => {navigate("/activity") ,[]}) 
          : <RegistrationForm />
        }
    </nav>
  )
}


import * as React from "react"
import "./LoginForm.css"
import { useState } from "react"
import apiClient from "../../../services/apiClient"


export default function LoginForm(props) {
    
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
      })

    const [user, setUser] = useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: ""
      })
    
      const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") <= 0) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }

      const loginUser = async () => {
        const {data, error} = await apiClient.login({email: form.email, password: form.password})
        if (error) {
          setErrors((e) => ({...e, form:error}))
        }

        if(data?.user) {
          setUser(data.user)
          apiClient.setToken(data.token)
          console.log("Here")
          //props.setIsLoggedIn(true)
          console.log("loggedin", props.isLoggedIn)
        }
      }

  return (
    <div className="login-form">
        <div className="card">
            <h2>Login</h2>
            <br></br>
            <div className="form">
                <div className="input-field">
                    Email
                    <input className="form-input" type="email" name="email" placeholder="user@gmail.com" value={form.email} onChange={handleOnInputChange}/>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input-field">
                    Password
                    <input className="form-input" type="password" name="password" placeholder="password" value={form.password} onChange={handleOnInputChange}/>
                </div>
                <button className="submit-login" onClick={loginUser}>Login</button>
            </div>
        </div>
    </div>
  )
}
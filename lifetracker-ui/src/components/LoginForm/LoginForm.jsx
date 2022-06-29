import * as React from "react"
import "./LoginForm.css"
import { useState } from "react"

export default function LoginForm(props) {
    
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
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

      const loginUser = () => {
        console.log("hi")
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
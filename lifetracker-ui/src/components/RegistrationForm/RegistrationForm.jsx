import * as React from "react"
import "./RegistrationForm.css"
import { useState } from "react"

export default function RegistrationForm(props) {

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        username: "",
        fistName: "",
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

        if (event.target.name === "passwordConfirm") {
            if (event.target.value != form.password) {
              setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not Match" }))
            } else {
              setErrors((e) => ({ ...e, passwordConfirm: null }))
            }
          }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }

    const signupUser = () => {
        console.log("signupUser")
    }

  return (
    <div className="registration-form">
        <div className="card">
            <h2>Register</h2>
            <br/>
            <div className="form">
              <div className="input-field">
                  Email
                  <input className="form-input" type="email" name="email" placeholder="Enter a Valid Email" value={form.email} onChange={handleOnInputChange}/>
                  {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="input-field">
                  Username
                  <input className="form-input" type="text" name="username" placeholder="Your Username" value={form.username} onChange={handleOnInputChange}/>
              </div>
              <div className="split-input-field">
                  <div className="input-field">
                      First Name
                      <input className="form-input" type="text" name="firstName" placeholder="Your First Name" value={form.firstName} onChange={handleOnInputChange}/>
                  </div>
                  <div className="input-field">
                      Last Name
                      <input className="form-input" type="text" name="lastName" placeholder="Your Last Name" value={form.lastName} onChange={handleOnInputChange}/>
                  </div>
              </div>
              <div className="input-field">
                  Password
                  <input className="form-input" type="text" name="password" placeholder="Create Your Password" value={form.password} onChange={handleOnInputChange}/>
              </div>
              <div className="input-field">
                  Confirm Password
                  <input className="form-input" type="text" name="passwordConfirm" placeholder="Confirm Your Password" value={form.passwordConfirm} onChange={handleOnInputChange}/>
                  {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
              </div>
              <button className="submit-login" onClick={signupUser}>Create Account</button>
            </div>
              
        </div>
    </div>
  )
}

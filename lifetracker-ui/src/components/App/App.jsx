import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Landing from "../Landing/Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "components/LoginPage/LoginPage"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import ActivityPage from "components/ActivityPage/ActivityPage"
import NutritionPage from "components/NutritionPage/NutritionPage"
import NotFound from "components/NotFound/NotFound"
import { useState } from "react"

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  


  return (
    <div className="app">
      <React.Fragment>
        
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn}/>}/>
            <Route path="/register" element={<RegistrationPage isLoggedIn={isLoggedIn}/>}/>
            <Route path="/activity" element={<ActivityPage />}/>
            <Route path="/nutrition/*" element={<NutritionPage />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}

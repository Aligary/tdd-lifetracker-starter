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
import { ActivityContextProvider, useActivityContext } from "components/contexts/activity"
import { AuthContextProvider, useAuthContext } from "components/contexts/auth"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  


  return (
    <div className="app">
      <React.Fragment>
        
        <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/register" element={<RegistrationPage isLoggedIn={isLoggedIn}/>}/>
            <Route path="/activity" element={<ActivityPage />}/>
            <Route path="/nutrition/*" element={<NutritionPage />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="/noAccess" element={<AccessForbidden />}/>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}

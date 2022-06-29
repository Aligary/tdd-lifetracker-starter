import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}

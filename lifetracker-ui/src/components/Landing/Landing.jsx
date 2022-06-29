import * as React from "react"
import "./Landing.css"

import watch from "../../img/watch.png"

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="hero">
        <img className="hero-img" src={watch} alt="hero img"/>
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>
    </div>
  )
}


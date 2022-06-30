import * as React from "react"
import "./ActivityPage.css"

const ActivityContext = React.createContext()

export default function ActivityContextProvider() {
    const [activity, setActivity] = React.useState
  return (
    <div className="activity-page">
        ActivityPage
      <div className="content">

      </div>
    </div>
  )
}


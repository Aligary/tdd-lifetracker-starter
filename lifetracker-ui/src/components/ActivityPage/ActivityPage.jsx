import * as React from "react"
import "./ActivityPage.css"
import ActivityFeed  from "components/ActivityFeed/ActivityFeed"

export default function ActivityPage() {
  let isProcessing = false;
  return (
    <div className="activity-page">
        <h2 className="heading">ActivityPage</h2>
        {
          isProcessing ?
          <h1>h1</h1>
          : <ActivityFeed />
        }
    </div>
  )
}



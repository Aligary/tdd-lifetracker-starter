import * as React from "react"
import "./ActivityPage.css"
import ActivityFeed  from "components/ActivityFeed/ActivityFeed"
import { useAuthContext } from "components/contexts/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ActivityPage() {
  let isProcessing = false;
  const {user} = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(user === undefined) {
      navigate("/noAccess")
    }
  }, [user])

  console.log("USER", user)
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



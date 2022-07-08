import * as React from "react"
import { Link } from "react-router-dom"
import "./NutritionOverview.css"
import { useState } from "react"
import NutritionFeed from "components/NutritionFeed/NutritionFeed"
import Loading from "components/Loading/Loading"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "components/contexts/auth"
import { useEffect } from "react"

export default function NutritionOverview(props) {
  const [error, setError] = useState("")
  let isLoading = false

  const {user} = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(user === undefined) {
      navigate("/noAccess")
    }})
  
  return (
    <div className="nutrition-overview">

      <div className="Banner">
        <h1>Nutrition</h1>
      </div>
      <div className="content">
        <div className="NutritionOverview">
          <div className="header">
            <h3>Overview</h3>
            <Link to="/nutrition/create" className="Button">Record Nutrition</Link>
          </div>
        </div>
      </div>

      {
        error ?
        <div className="error">{error}</div>
        : null
      }

      {
        isLoading?
        <Loading />
        : <NutritionFeed nutritions={props.nutritions}/>
      }

        
    </div>
  )
}


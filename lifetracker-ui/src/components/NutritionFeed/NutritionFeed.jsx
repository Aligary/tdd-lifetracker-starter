import NutritionCard from "components/NutritionCard/NutritionCard"
import * as React from "react"
import apiClient from "../../../services/apiClient"
import "./NutritionFeed.css"
import { useAuthContext } from "components/contexts/auth"

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function NutritionFeed(props) {
    const {user} = useAuthContext()

    const navigate = useNavigate()

    useEffect(() => {
        if(user === undefined) {
        navigate("/noAccess")
        }})

    console.log("userid", user?.id)
    const nutritions = apiClient.listNutritionForUser(user?.id)

    console.log("In FEED", nutritions)
  return (
    <div className="nutrition-feed">
        {
            props.nutritions?
            props.nutritions.map((e) => {
                return <NutritionCard 
                    nutritions={e}
                />
            })
            : <div className="empty-message">Nothing here yet</div>

        }
    </div>
  )
}


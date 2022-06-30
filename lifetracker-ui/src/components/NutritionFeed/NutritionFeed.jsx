import NutritionCard from "components/NutritionCard/NutritionCard"
import * as React from "react"
import "./NutritionFeed.css"

export default function NutritionFeed(props) {
    console.log(1, props.nutritions)
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


import NutritionCard from "components/NutritionCard/NutritionCard"
import * as React from "react"
import "./NutritionFeed.css"

export default function NutritionFeed(props) {
    
  return (
    <div className="nutrition-feed">
        {
            props.nutritions?
            props.nutritions.map((e) => {
                return <NutritionCard 
                    imageUrl={e.imageUrl}
                    name={e.name}
                    calories={e.calories}
                    category={e.category}
                    createdAt={e.createdAt}
                />
            })
            : <div className="empty-message">Nothing here yet</div>

        }
    </div>
  )
}


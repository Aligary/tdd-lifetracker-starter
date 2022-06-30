import * as React from "react"
import "./NutritionCard.css"

export default function NutritionCard(props) {
    console.log(props)
  return (
    <div className="nutrition-card">
        <div className="card-header">
            {
                props.imageUrl?
                <img classname="nutrition-image"src={props.nutritions.imageUrl} alt="nutrition"/>
                :null
            }
            <h2 className="nutrition-name">{props.nutritions.name}</h2>
        </div>
        <div className="card-stats">
            <div className="nutrition-calories">
                <p>Calories</p>
                <span>{props.nutritions.calories}</span>
            </div>
        </div>
        <div className="card-meta">
            <small className="nutrition-date">{props.nutritions.createdAt}</small>
            <small className="nutrition-category">{props.nutritions.category}</small>

        </div>
    </div>
  )
}


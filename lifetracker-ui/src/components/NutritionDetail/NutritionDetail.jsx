import * as React from "react"
import "./NutritionDetail.css"
import { useParams } from "react-router-dom"

export default function NutritionDetail() {

  let { nutritionId } = useParams();
  return (
    <div className="nutrition-detail">
        NutritionDetail
    </div>
  )
}


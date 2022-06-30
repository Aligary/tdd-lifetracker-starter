import * as React from "react"
import "./NutritionDetail.css"
import { useParams } from "react-router-dom"
import { useState } from "react";
import NutritionCard from "components/NutritionCard/NutritionCard";

export default function NutritionDetail() {

  let { nutritionId } = useParams();

  const [nutritions, setNutritions] = useState([
    {id: 1, imageUrl: "", name: "rice", calories: "100", category: "food", createdAt: "2001-09-10"},
    {id: 2, imageUrl: "", name: "chicken", calories: "1010", category: "food", createdAt: "2001-09-10"},
    {id: 3, imageUrl: "", name: "brocoli", calories: "50", category: "food", createdAt: "2001-09-10"},
    {id: 4, imageUrl: "", name: "water", calories: "0", category: "bev", createdAt: "2001-09-10"}])

    const showCardById = () => {
      for(let i = 0; i < nutritions.length; i++)
      {
        if(nutritions[i].id == nutritionId) {
          return <NutritionCard nutritions={nutritions[i]}
        />}
      }
    }

  return (
    <div className="nutrition-detail">
        {
          showCardById()
        }
    </div>
  )
}


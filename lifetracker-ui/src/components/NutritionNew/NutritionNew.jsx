import NutritionForm from "components/NutritionForm/NutritionForm"
import * as React from "react"
import "./NutritionNew.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NutritionNew(props) {

  const [nutritionInput, setNutritionInput] = useState(
    {
      name: "",
      calories: 1,
      imageUrl: "",
      category: "",
    }
    )
  const [errors, setErrors]  = useState("")

  
  const navigate = useNavigate()

  const handleOnInputChange = (event) => {
    if (event.target.value === "") {
        setErrors((e) => ({ ...e, [event.target.name]: `Required Field - ${event.target.name}` }))
      }
    setNutritionInput((f) => ({ ...f, [event.target.name]: event.target.value }))
  }


  const createNewNutrition = () => {
    console.log("create new entry")
     

  }
  return (
    <div className="content">
      <div className="nutrition-new">
          <NutritionForm 
            nutritionInput={nutritionInput} 
            handleOnInputChange={handleOnInputChange} 
            createNewNutrition={createNewNutrition}
            errors={errors}
            />
      </div>
    </div>
  )
}


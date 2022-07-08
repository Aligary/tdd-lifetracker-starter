import NutritionForm from "components/NutritionForm/NutritionForm"
import * as React from "react"
import "./NutritionNew.css"
import { useState, useEffect } from "react"
import { useAuthContext } from "components/contexts/auth"
import apiClient from "../../../services/apiClient"
import { useNavigate } from "react-router-dom"


export default function NutritionNew(props) {

  const {user} = useAuthContext()
  const navigate = useNavigate()
  console.log("id", user.id)
  const [nutritionInput, setNutritionInput] = useState(
    {
      name: "",
      calories: 1,
      imageUrl: "",
      category: "",
      quantity: 1,
      user_id: user.id
    }
    )
  const [errors, setErrors]  = useState("")

  

  const handleOnInputChange = (event) => {
    if (event.target.value === "") {
        setErrors((e) => ({ ...e, [event.target.name]: `Required Field - ${event.target.name}` }))
      }
    setNutritionInput((f) => ({ ...f, [event.target.name]: event.target.value }))
  }


  const createNewNutrition = () => {
    console.log("nutInput", nutritionInput)
    apiClient.createNutrition(nutritionInput)
    let temp = apiClient.listNutritionForUser()
    console.log(temp)

    navigate("/nutrition")

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


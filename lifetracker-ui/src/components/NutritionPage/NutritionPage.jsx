import * as React from "react"
import "./NutritionPage.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NutritionOverview from "../NutritionOverview/NutritionOverview"
import NotFound from "components/NotFound/NotFound"
import NutritionNew from "components/NutritionNew/NutritionNew"
import NutritionDetail from "components/NutritionDetail/NutritionDetail"
import { useState } from "react"
import { useAuthContext } from "components/contexts/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NutritionPage() {

  const [nutritions, setNutritions] = useState([
    {imageUrl: "", name: "rice", calories: "100", category: "food", createdAt: "2001-09-10", quantity: 1},
    {imageUrl: "", name: "chicken", calories: "1010", category: "food", createdAt: "2001-09-10", quantity: 2},
    {imageUrl: "", name: "brocoli", calories: "50", category: "food", createdAt: "2001-09-10", quantity: 2},
    {imageUrl: "", name: "water", calories: "0", category: "bev", createdAt: "2001-09-10", quantity: 1}])


  const {user} = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(user === undefined) {
      navigate("/noAccess")
    }
  }, [user])
  return (
    <div className="nutrition-page">
        <Routes>
          <Route path="/" element={<NutritionOverview nutritions={nutritions}/>}/>
          <Route path="/create" element={<NutritionNew />}/>
          <Route path="/id/:nutritionId" element={<NutritionDetail />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  )
}


import * as React from "react"
import "./NutritionPage.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NutritionOverview from "../NutritionOverview/NutritionOverview"
import NotFound from "components/NotFound/NotFound"
import NutritionNew from "components/NutritionNew/NutritionNew"
import NutritionDetail from "components/NutritionDetail/NutritionDetail"

export default function NutritionPage() {
  return (
    <div className="nutrition-page">
        <Routes>
          <Route path="/" element={<NutritionOverview />}/>
          <Route path="/create" element={<NutritionNew />}/>
          <Route path="/id/:nutritionId" element={<NutritionDetail />}/>
          <Route path="/" element={<NotFound />}/>
        </Routes>
    </div>
  )
}


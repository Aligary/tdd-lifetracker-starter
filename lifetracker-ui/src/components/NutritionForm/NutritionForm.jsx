import * as React from "react"
import "./NutritionForm.css"

export default function NutritionForm(props) {
    console.log(props.errors)
  return (
    <div className="content">
        <div className="nutrition-form">
            <h2>Record Nutrition</h2>
            <div className="form">
                <div className="input-field">
                    Name
                    <input className="form-input" type="text" name="name" placeholder="Nutrition Name" value={props.nutritionInput.name} onChange={props.handleOnInputChange}/>
                    {props.errors.name && <span className="error">{props.errors.name}</span>}
                </div>
                <div className="split-input-field">
                    <div className="input-field">
                        Calories
                        <input className="form-input" type="number" name="calories" min="0" max="10000000000" step="10" value={props.nutritionInput.calories} onChange={props.handleOnInputChange}/>
                        {props.errors.calories && <span className="error">{props.errors.calories}</span>}
                    </div>
                    <div className="input-field">
                        Quantity
                        <input className="form-input" type="number" name="quantity" min="0" max="10000000000" step="1" value={props.nutritionInput.quantity} onChange={props.handleOnInputChange}/>
                        {props.errors.quantity && <span className="error">{props.errors.quantity}</span>}
                    </div>
                </div>
                <div className="input-field">
                        Category
                        <input className="form-input" type="text" name="category" placeholder="Nutrition Category" value={props.nutritionInput.category} onChange={props.handleOnInputChange}/>
                        {props.errors.category && <span className="error">{props.errors.category}</span>}
                    </div>
                
                <div className="input-field">
                    Image URL
                    <input className="form-input" type="text" name="imageUrl" placeholder="http://www.food-image.com/1" value={props.nutritionInput.imageUrl} onChange={props.handleOnInputChange}/>
                    {props.errors.imageUrl && <span className="error">{props.errors.imageUrl}</span>}
                </div>
                <button className="submit-nutrition" onClick={props.createNewNutrition}>Save</button>
            </div>
            
        </div>
    </div>
        
  )
}


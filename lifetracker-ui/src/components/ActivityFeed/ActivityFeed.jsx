import * as React from "react"
import "./ActivityFeed.css"
import SummaryStat  from "components/SummaryStat/SummaryStat"


export default function ActivityFeed() {
    //an array of items containing summary data about the total calories consumed per day
    let totalCaloriesPerDay = [{date: "12-22-2022", calories: 300}];

    //an array of items containing summary data about the average calories consumed per category
    let avgCaloriesPerCategory =
        [{category: "1", calories: 100.0},
        {category: "2", calories: 100.0},
        {category: "3", calories: 100.0},
        {category: "4", calories: 100.0},
        {category: "5", calories: 100.0},
        {category: "6", calories: 100.0},
        {category: "7", calories: 100.0}];

    function renderSummaryPerCategory() {
        if(avgCaloriesPerCategory.length >= 6){
            avgCaloriesPerCategory.splice(6,avgCaloriesPerCategory.length)
        }
        
        console.log(avgCaloriesPerCategory.length)
        return (avgCaloriesPerCategory.map((e) => {
            console.log(e)
            return <SummaryStat 
                stat={e.calories}
                label="calories"
                substat={e.category}
                />
        }))
    }

  return (
    <div className="activity-feed">

        <div className="main">
            <div className="per-category">
                <div className="background">
                    <h4>Average Calories Per Category</h4>
                    {renderSummaryPerCategory()}
                </div>
                
            </div>
            <div className="per-day">
                <div className="background">
                    <h4>Total Calories Per Day</h4>
                    {
                        totalCaloriesPerDay.map((e) => {
                            return <SummaryStat 
                                stat={e.calories}
                                label="calories"
                                substat={e.date}
                                />
                        })
                    }
                </div>
                
            </div>
        </div>
        
    </div>
  )
}


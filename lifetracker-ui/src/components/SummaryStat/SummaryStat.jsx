import * as React from "react"
import "./SummaryStat.css"

export default function SummaryStat(props) {
  return (
    <div className="summary-stat">
        <div className="primary-statistic">
            {props.stat}
        </div>
        <div className="stat-label">
            {props.label}
        </div>
        <div className="secondary-statistic">
            {props.substat}
        </div>
    </div>
  )
}



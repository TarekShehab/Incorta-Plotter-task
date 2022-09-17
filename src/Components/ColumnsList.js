import React from "react"
import DraggableButton from "./dragndrop/DraggableButton.js"

// Avoiding misspelling
const DIMENSION = "dimension"
const MEASURE = "measure"

function ColumnsList ({columns}) {

    return (
        <div className="col1">
                
            <h2>- Columns -</h2>
            <ul>
                <h3>Dimensions:</h3>
                {
                    columns.filter(c => c.function === 'dimension').map(col => {
                        return(
                            <li key={col.name} >
                                <DraggableButton name={col.name} type={DIMENSION} />
                            </li>
                        )
                    })
                }

                <h3>Measures:</h3>
                {
                    columns.filter(c => c.function === 'measure').map(col => {
                        return(
                            <li key={col.name} >
                                <DraggableButton name={col.name} type={MEASURE} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ColumnsList
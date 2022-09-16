import React, { useState } from "react"
import DroppableZone from "./dragndrop/DroppableZone.js"


function Picker() {
    const [dimension, setDimension] = useState("")
    const [measures, setMeasures] = useState([])

    console.log("Dimension: ", dimension)
    console.log("Measures: ", measures)

    return(
        <div className="picker">

            <DroppableZone type="dimension-button" setDimension={setDimension} />

            {/* <br/> */}

            <DroppableZone type="measure-button" setMeasures={setMeasures} />
            
        </div>
    )
}

export default Picker
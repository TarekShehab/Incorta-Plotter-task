import React, { useState, useEffect } from "react"
import DroppableZone from "./dragndrop/DroppableZone.js"


function Picker({columns, getQueryData, clearPlotData}) {

    const [dimension, setDimension] = useState("")
    const [measures, setMeasures] = useState([])

    useEffect(() => {
        if(dimension !== "" && measures.length !==0){
            getQueryData(dimension, measures)
            // console.group("Query:")
            // console.log("Dimension: ", dimension)
            // console.log("Measeures: ", measures)
            // console.groupEnd()
        }         
    }, [dimension, measures])

    return(
        <div className="picker">
            <DroppableZone type="dimension" dimension={dimension} setDimension={setDimension}  clearPlotData={clearPlotData} />
            <DroppableZone type="measure" measures={measures} setMeasures={setMeasures} clearPlotData={clearPlotData} />
        </div>
    )
}

export default Picker
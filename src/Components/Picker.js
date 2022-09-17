import React, { useState, useEffect } from "react"
import DroppableZone from "./dragndrop/DroppableZone.js"


function Picker({getQueryData}) {
    const [dimension, setDimension] = useState("")
    const [measures, setMeasures] = useState([])

    console.log("Dimension: ", dimension)
    console.log("Measures: ", measures)

    // const setData = (data, columnType) => {
    //     columnType==='dimension' ? setDimension(data) : setMeasures(measures => [...measures, data])
    // }
    
    // const setData = (data, columnType) => {
    //     columnType==='dimension' ? setDimension(data) : setMeasures(measures => [...measures, data])
    // }
    
    useEffect(() => {
        if(dimension !== "" && measures.length !==0){
            console.group("Query:")
            console.log("Dimension: ", dimension)
            console.log("Measeures: ", measures)
            console.groupEnd()
            getQueryData(dimension, measures)
        }            
    }, [dimension, measures])

    return(
        <div className="picker">

            <DroppableZone type="dimension" setDimension={setDimension} />

            {/* <br/> */}

            <DroppableZone type="measure" setMeasures={setMeasures} />
            
        </div>
    )
}

export default Picker
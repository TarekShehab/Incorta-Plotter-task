import React from "react"
import DroppableZone from "./dragndrop/DroppableZone.js"


function Picker() {

    return(
        <div className="picker">

            <DroppableZone type="dimension-button" />

            {/* <br/> */}

            <DroppableZone type="measure-button" />
            
        </div>
    )
}

export default Picker
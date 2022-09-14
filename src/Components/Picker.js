import React, { Component } from "react"
// import { DragDropContext } from 'react-beautiful-dnd'

class Picker extends Component{
    render(){
        return(
            <div className="picker">
                <input placeholder="Dimension" id="dimension" disabled/>
                <button>Clear</button>

                <br/>

                <input placeholder="Measures" id="measures" disabled/>
                <button>Clear</button>

                
            </div>
        )
    }
}

export default Picker
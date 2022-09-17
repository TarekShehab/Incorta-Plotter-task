import React from "react"
import { useDrag } from 'react-dnd'
 
function DraggableButton({id, name, type}) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: type,
        item: {id: name},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return(
        <button 
            ref={drag}
            style={{border: isDragging ? "1px solid black" : "0px" }}
            id="tag"
        > {name} </button>
    )
}

export default DraggableButton
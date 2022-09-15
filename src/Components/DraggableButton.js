import React from "react"
import { useDrag } from 'react-dnd'
 
function DraggableButton({id, name}) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'button',
        item: {id: id},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return(
        <button 
            ref={drag}
            style={{border: isDragging ? "2px solid black" : "0px" }}
        > {name} </button>
    )
}

export default DraggableButton
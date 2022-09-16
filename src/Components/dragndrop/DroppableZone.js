import React, { useState } from "react"
import { useDrop } from "react-dnd"
import DraggableButton from "./DraggableButton.js"


const columns = [
    {
        "name": "Product",
        "function": "dimension"
    },
    {
        "name": "Year",
        "function": "dimension"
    },
    {
        "name": "Country",
        "function": "dimension"
    },
    {
        "name": "Cost",
        "function": "measure"
    },
    {
        "name": "Revenue",
        "function": "measure"
    },
    {
        "name": "Units sold",
        "function": "measure"
    }
]

function DroppableZone({type, setDimension, setMeasures}) {
    
    let uniqueDropBoard
    const [dropBoard, setBoard] = useState([])
    const [{isOver}, drop] =  useDrop(() => ({
        accept: type,
        drop: item => addcolumnTag(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })) 

    const showDrag = () =>{
        console.log(isOver)
    }

    const addcolumnTag = name => {
        const tagsList = columns.filter(col => col.name === name)
        setBoard(board => [...board, tagsList[0]])
        showDrag()
        //Set Dimension & Measures accordingly
        type === "dimension-button" ? setDimension(name) : setMeasures(board => [...board, tagsList[0]])
    }

    const clearBoard = () => {
        setBoard([])
        // console.log(Array.from(new Set(dropBoard)))
    }
    
    // Only first dimension added it applied
    if(type === "dimension-button" && dropBoard.length > 1){
        setBoard(board => [board[0]])
    }

    // Remove duplicates
    uniqueDropBoard = [...new Set(dropBoard)]

    // console.log("DropBoard: ", dropBoard)

    return(
        <div className="drop">
            { type === "dimension-button" ? <p>Dimension:</p> : <p>Measure:</p> }

            <div ref={drop} id="tags-container">
                {
                    uniqueDropBoard.map(column => {
                        return <DraggableButton key={column.name} id={column.name} name={column.name} type={type} />
                    })    
                }
            <button onClick={clearBoard} id="clear-button">⨉ Clear</button>
            </div>

        </div>
    )
}

export default DroppableZone
import React, { useState } from "react"
import { useDrop } from "react-dnd"
import DraggableButton from "./DraggableButton.js"

const DIMENSION = "dimension"
// const MEASURE = "measure"

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

function DroppableZone({type, dimension, setDimension, setMeasures, clearPlotData}) {
    
    let uniqueDropBoard
    const [dropBoard, setBoard] = useState([])
    const [{isOver}, drop] =  useDrop(() => ({
        accept: type,
        drop: item => addcolumnTag(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })) 

    const addcolumnTag = name => {
        const tagsList = columns.filter(col => col.name === name)
        setBoard(board => [...board, tagsList[0]])
        //Set Dimension & Measures accordingly (removing duplicate additions by using Set object)
        if(type === DIMENSION) {
            if(dimension.length === 0)
                setDimension(name)
        }else{
            setMeasures(measures => Array.from(new Set([...measures, tagsList[0].name])))
        }
    }

    
    const clearBoard = () => {
        setBoard([])
        type === DIMENSION ? setDimension("") : setMeasures([])
        clearPlotData()
    }
    
    // Last Added Dimension Applies
    if(type === DIMENSION && dropBoard.length > 1){
        setBoard(board => [board[board.length-1]])
    }

    // Remove duplicates
    uniqueDropBoard = [...new Set(dropBoard)]

    return(
        <div className="drop">
            { type === DIMENSION ? <p>Dimension:</p> : <p>Measure:</p> }

            <div ref={drop} id="tags-container">
                {
                    uniqueDropBoard.map(column => {
                        return <DraggableButton key={column.name} name={column.name} type={type} />
                    })    
                }
                <button onClick={clearBoard} id="clear-button">⨉ Clear</button>
            </div>

        </div>
    )
}

export default DroppableZone
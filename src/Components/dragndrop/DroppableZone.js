import React, {useState} from "react"
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

function DroppableZone({type}) {
    
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
        console.log(`droppable zone of type: ${type} has a list: ${dropBoard}`)

    }

    const clearBoard = () => {
        setBoard([])
        console.log(Array.from(new Set(dropBoard)))
    }

    // Remove duplicates
    let uniqueDropBoard = [...new Set(dropBoard)]
    // setBoard(Array.from(uniqueDropBoard))

    return(
        <div className="drop">
            {type==="dimension-button" ? <p>Dimension:</p> : <p>Measure:</p> }
            <div ref={drop}>
                {
                    uniqueDropBoard.map(column => {
                        return <DraggableButton key={column.name} id={column.name} name={column.name}  type={type} />
                    })    
                }
            </div>
            <button onClick={clearBoard}>✖</button>

            
        </div>
    )
}

export default DroppableZone
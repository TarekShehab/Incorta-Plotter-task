import React, {useState} from "react"
import DraggableButton from "./DraggableButton"
import { useDrop } from "react-dnd"

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

function Picker() {
    
    const [dimensionDropBoard, setBoard] = useState([])
    const [{isOver}, drop] =  useDrop(() => ({
        accept: 'button',
        drop: item => addcolumnTag(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })) 

    const addcolumnTag = name => {
        const tagsList = columns.filter(col => col.name === name)
        setBoard(board => [...board, tagsList[0]])
    }

    return(
        <div className="picker">
            <div className="droppable" ref={drop}>
                {/* <p>Dimension</p> */}
                {
                    dimensionDropBoard.map(tag => {
                        return <DraggableButton id={tag.name} name={tag.name} key={tag.name} />
                    })    
                }
            </div>
            <button>Clear</button>

            <br/>

            <div className="droppable" >
                {/* <p>Measures</p> */}
                {
                    dimensionDropBoard.map(tag => {
                        return <DraggableButton id={tag.name} name={tag.name} key={tag.name} />
                    })
                }
            </div>
            <button>Clear</button>
            
        </div>
    )
}

export default Picker
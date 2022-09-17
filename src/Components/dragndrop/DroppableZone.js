import React from "react"
import { useDrop } from "react-dnd"
import DraggableButton from "./DraggableButton.js"

// Avoiding misspelling
const COLUMNS = ["Product", "Year", "Country", "Cost", "Revenue", "Units sold"]
const DIMENSION = "dimension"
const MEASURE = "measure"

function DroppableZone({type, dimension, measures, setDimension, setMeasures, clearPlotData}) {

    let uniqueDropBoard
    const [{isOver}, drop] =  useDrop(() => ({
        accept: type,
        drop: item => addcolumnTag(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })) 

    const addcolumnTag = name => {
        const tagsList = COLUMNS.filter(col => col === name)
        
        //Set Dimension & Measures accordingly (removing duplicate additions by using Set object)
        if(type === DIMENSION) {
            if(dimension.length === 0)
                setDimension(name)
        }else{
            setMeasures(measures => Array.from(new Set([...measures, tagsList[0]])))
        }
    }

    const clearBoard = () => {
        type === DIMENSION ? setDimension("") : setMeasures([])
        clearPlotData()
    }

    switch(type){
        case DIMENSION : 
            dimension !== '' ? uniqueDropBoard = [dimension] : uniqueDropBoard = []
            break
        case MEASURE : 
            uniqueDropBoard = [...new Set(measures)]
            break
        default :
            break
    }
    
    return(
        <div className="drop">
            { type === DIMENSION ? <p>Dimension:</p> : <p>Measure(s):</p> }

            <div ref={drop} id="tags-container">
                {
                    (uniqueDropBoard.map(column => {
                        return <DraggableButton key={column} name={column} type={type} />
                    }))    
                }
                <button onClick={clearBoard} id="clear-button">⨉ Clear</button>
            </div>

        </div>
    )
}

export default DroppableZone
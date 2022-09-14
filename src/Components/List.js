import React, { Component } from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const data = [
    {
        name: 'one',
        id: '1'
    },
    {
        name: 'two',
        id: '2'
    },
    {
        name: 'three',
        id: '3'
    },
    {
        name: 'four',
        id: '4'
    },
    {
        name: 'five',
        id: '5'
    },
]

class List extends Component {
    
    onEnd = result => {
        console.log(result)
    }
    
    render(){
        
        // const { list , setList } = React.useState(data)
        // const { innerRef } = this.props

        return (
            <DragDropContext onDragEnd={this.onEnd}>
                <Droppable droppableId="doppable">
                    {
                        (provided, snapshot) => (
                            <div ref={provided.innerRef} >
                                {
                                    data.map((item, index) => (
                                        <Draggable 
                                            draggableId={item.id}
                                            key={item.id}
                                            index={index}
                                        >
                                            {
                                                (provided, snapshot) => {
                                                    <div 
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div>
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                }
                                            }
                                        </Draggable>
                                    ))
                                }
                            </div>
                        )
                    }
                </Droppable>
            </DragDropContext>
        )
    }
}

export default List
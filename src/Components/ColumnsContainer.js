import React, { Component } from "react"
import * as API from '../API.js'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

class ColumnsContainer extends Component {

    state={
        columns: []
    }

    getColumns = async () => {
        await API.getAll()
            .then(res => this.setState({columns: res}) )
    }

    componentDidMount = () => {
        this.getColumns()
        // this.getData("Product", ["Cost"])
    }

    render(){
        return (
            <div className="col1">
                {/* <DragDropContext> */}
                    
                    <h2>Columns</h2>

                    <ul>
                        <h3>Dimensions:</h3>
                        {
                            this.state.columns.filter(c => c.function === 'dimension').map(col => {
                                return(
                                    <li key={col.name} >
                                        <button > {col.name} </button>
                                    </li>
                                )
                            })
                        }

                        <h3>Measures:</h3>
                        {
                            this.state.columns.filter(c => c.function === 'measure').map(col => {
                                return(
                                    <li key={col.name} >
                                        <button > {col.name} </button>
                                    </li>
                                )
                            })
                        }
                    </ul>

                {/* </DragDropContext> */}
            </div>
        )
    }
}

export default ColumnsContainer
import React, { Component } from "react"
import * as API from '../API.js'
import DraggableButton from "./DraggableButton.js"

class ColumnsList extends Component {

    state={
        columns: []
    }

    getColumns = async () => {
        await API.getAll()
            .then(res => {
                console.log(res)
                this.setState({columns: res})
            })
    }

    componentDidMount = () => {
        this.getColumns()
        // this.getData("Product", ["Cost"])
    }

    render(){
        return (
            <div className="col1">
                    
                <h2>Columns</h2>
                <ul>
                    <h3>Dimensions:</h3>
                    {
                        this.state.columns.filter(c => c.function === 'dimension').map(col => {
                            return(
                                <li key={col.name} >
                                    {/* <button > {col.name} </button> */}
                                    <DraggableButton id={col.name} name={col.name} />
                                </li>
                            )
                        })
                    }

                    <h3>Measures:</h3>
                    {
                        this.state.columns.filter(c => c.function === 'measure').map(col => {
                            return(
                                <li key={col.name} >
                                    {/* <button > {col.name} </button> */}
                                    <DraggableButton id={col.name} name={col.name} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ColumnsList
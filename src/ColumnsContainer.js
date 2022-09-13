import React, { Component } from "react"
import * as API from './API.js'

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
                <h2>Columns</h2>

                <h3>Dimensions:</h3>
                <ul>
                    {
                        this.state.columns.filter(c => c.function === 'dimension').map(col => {
                            return <li key={col.name} >{col.name}</li>
                        })
                    }
                </ul>
                
                <h3>Measures:</h3>
                <ul>
                    {
                        this.state.columns.filter(c => c.function === 'measure').map(col => {
                            return <li key={col.name} >{col.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ColumnsContainer
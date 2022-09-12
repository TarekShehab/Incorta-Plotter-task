import React, { Component } from "react"
import * as API from './API.js'

class ColumnsContainer extends Component {

    state={
        columns: []
    }

    getColumns = async () => {
        await API.getAll()
            .then(res => {
                console.log(res)
                return this.setState({columns: res})
            })
    }

    getData = async (dimension, measures) => {
        const data = 
        {
            "dimension": dimension,
            "measures": measures
        }
        await API.getData(data)
            .then(res => {
                console.log(res)
                return res
            })
    }

    componentDidMount = () => {

        this.getColumns()
        // this.getData("Product", ["Cost"])
    }

    render(){
        return (
            <div className="columns">
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
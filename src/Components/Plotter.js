import React, { Component } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import * as API from '../API.js'

const data = [
    {
        "name": "a",
        "Cost": 584207.400000002,
        "Revenue": 1256523.879999999
    },
    {
        "name": "b",
        "Cost": 1880407.440000024,
        "Revenue": 4303905.360000013
    },
    {
        "name": "c",
        "Cost": 7531491.899999776,
        "Revenue": 14439514.229999809
    },
    {
        "name": "d",
        "Cost": 3861.4400000000046,
        "Revenue": 223194.63999999984
    },
    {
        "name": "e",
        "Cost": 8910.88,
        "Revenue": 20004
    },
    {
        "name": "f",
        "Cost": 351.76,
        "Revenue": 11063.36
    }
]

class Plotter extends Component {

    state={
        data: [],
        plotData: []
    }

    getData = async (dimension, measures) => {
        const data = 
        {
            "dimension": dimension,
            "measures": measures
        }
        await API.getData(data)
            .then(res => {
                console.log("Retrieved data: ", res)
                this.setState({data: res})
            })
    }

    buildPlotData = () => {
        let data = this.state.data
        let plotData
        if(data !== []){
            // Write name of each value of the dimension
            plotData = data[0].values.map(val => {
                return {
                    name: val
                }
            })

            // Write the values of each measure
            //remove first element (dimension) to get an array of measures
            data.shift()
            for(let i=0 ; i<data.length ; i++){
                const measure = data[i].name
                for(let j=0 ; j<plotData.length ; j++){
                    plotData[j][measure] = data[i].values[j]
                }
            }
        }
        
        console.log("Plot data: ", plotData)
        return plotData
    }

    componentDidMount() {
        this.getData("Product", ["Cost", "Revenue"])
            // .then(this.buildPlotData())
    }

    render() {
        console.log("State data: ", this.state.data)
        return (
            <div className="plotter">
                <button onClick={this.buildPlotData}> </button>
                <ResponsiveContainer width="70%" aspect={1}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 30,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend/>
                    <Line type="monotone" dataKey="Cost" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
                </LineChart>
                </ResponsiveContainer>
            </div>
          )
    }
}

export default Plotter
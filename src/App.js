import React, { Component } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend"
import ColumnsList from './Components/ColumnsList.js'
import Plotter from './Components/Plotter.js'
import Picker from './Components/Picker.js'
import * as API from './API.js'

class App extends Component {

  state={
    columns:[],
    queryResponse: [],
    plotData: []
  }

  // Clear the state variable: queryResponse
  clearResponse = () => {
    this.setState({queryResponse: []})
  }

  //Fetch all columns from API & update state
  getColumns = async () => {
    await API.getAll()
      .then(res => this.setState({columns: res}))
  }

  // Fetch Query response from API & update state
  getQueryData = async (dimension, measures) => {
    const data = 
    {
      "dimension": dimension,
      "measures": measures
    }
    await API.getData(data)
      .then(res => this.setState({queryResponse: res}))
  }

  // Buil data that will be passed to the plotter to draw the line chart & update state
  buildPlotData = () => {
    let data = this.state.queryResponse
    let plotData

    if(data !== []){
      // Write name of each value of the dimension
      plotData = data[0].values.map(val => {
        return {
          name: val
        }
      })

      // Write the values of each measure
      data.shift() //remove first element (dimension) to get an array of measures
      for(let i=0 ; i<data.length ; i++){
        const measure = data[i].name
        for(let j=0 ; j<plotData.length ; j++){
          plotData[j][measure] = data[i].values[j]
        }
      }
    }
    else{
      return []
    }
    
    console.log("Plot data: ", plotData)
    this.setState({plotData: plotData})
  }

  componentDidMount = () => {
    this.getColumns()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.queryResponse !== this.state.queryResponse){
      this.buildPlotData()
    }
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>

        <div className='row-flex'>
          <ColumnsList 
            columns={this.state.columns}
          />
          <div className='col2 col-flex'>
            <Picker 
              getQueryData={this.getQueryData} 
              clearPlotData={() => this.setState({plotData: []})} 
            />
            <Plotter 
              plotData={this.state.plotData}
            />
          </div>
        </div>

      </DndProvider>
    )
  }
  
}

export default App

import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Plotter({plotData}) {
    
    let measures = []

    // Determine the measures that are in the current data that needs to be plotted
    const findMeasures = () => {
        if(plotData.length !== 0){
            for (const pair of Object.entries(plotData[0])){
                if(pair[0] !== "name"){
                    measures.push(pair[0])
                }
            }
        }
    }
    findMeasures()

    // Formats the values of the Y-Axis ticks (1,000 => K & 1,000,000 => M)
    const formatYAxis = val => {
        if (val >=10000 && val<=999999){
            return val/1000 + "K"
        }

        if (val >=1000000){
            return val/1000000 + "M"
        }
        return val
    }

    // Format the values of the X-Axis ticks (only first word)
    const formatXAxis = val => {
        if(plotData.length !==0){
            const array = val.split(" ")
            return array[0]
        }
        return ""
    } 
    
    // Format the data that shows when hovering on a data point
    const formatToolTip = (val, name) => {
        val =  Math.round(val)
        if (val >=10000 && val<=999999){
            val = (val/1000).toFixed(2)
            val += "K "
        }
        
        if (val >=1000000){
            val = (val/1000000).toFixed(2)
            val += "M "
        }
        if(name !== "Units sold"){
            val = val + "$"
        }
        return val
    }

    // Format toolTip label
    const formatLabel = name => {
        name = "- " + name + " -"
        return name

    }

    
    return (
        <div className="plotter">
            <ResponsiveContainer width="70%" aspect={1}>
            <LineChart
                width={500}
                height={300}
                data={plotData}
                margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" />
                <XAxis 
                    dataKey="name" 
                    tickFormatter={formatXAxis} 
                    angle={45} 
                    tickCount={6} 
                    tick={{fontSize: 15}} 
                />
                <YAxis 
                    tickFormatter={formatYAxis} 
                    tick={{fontSize: 15}} 
                />
                <Tooltip formatter={formatToolTip} labelFormatter={formatLabel} />
                <Legend />
                { (measures.includes("Cost")) && (<Line type="linear" dataKey="Cost" stroke="#8884d8" activeDot={{ r: 8 }} />) }
                { (measures.includes("Revenue")) && (<Line type="linear" dataKey="Revenue" stroke="#82ca9d" />) }
                { (measures.includes("Units sold")) && (<Line type="linear" dataKey="Units sold" stroke="#FF3131" />) }
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Plotter
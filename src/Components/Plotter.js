import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'



function Plotter({buildPlotData}) {

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

    return (
        <div className="plotter">
            <button onClick={buildPlotData}> </button>
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

export default Plotter
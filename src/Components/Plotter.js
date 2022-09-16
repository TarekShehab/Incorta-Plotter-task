import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'



function Plotter({plotData}) {

    const data = [
        {
            "name": "17\" LCD w/built-in HDTV Tuner",
            "Cost": 584207.400000002,
            "Revenue": 1256523.879999999,
            "Units Sold": 980
        },
        {
            "name": "Mini DV Camcorder with 3.5\" Swivel LCD",
            "Cost": 1880407.440000024,
            "Revenue": 4303905.360000013,
            "Units Sold": 3064
        },
        {
            "name": "Envoy Ambassador",
            "Cost": 7531491.899999776,
            "Revenue": 14439514.229999809,
            "Units Sold": 4000000
        },
        {
            "name": "Model CD13272 Tricolor Ink Cartridge",
            "Cost": 3861.4400000000046,
            "Revenue": 223194.63999999984,
            "Units Sold": 176
        },
        {
            "name": "5MP Telephoto Digital Camera",
            "Cost": 8910.88,
            "Revenue": 20004,
            "Units Sold": 16
        },
        {
            "name": "f256MB Memory Card",
            "Cost": 351.76,
            "Revenue": 11063.36,
            "Units Sold": 8
        }
    ]

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
        const array = val.split(" ")
        return array[0]
    } 
    
    return (
        <div className="plotter">
            {/* <button onClick={buildPlotData}> </button> */}
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
                <XAxis dataKey="name" tickFormatter={formatXAxis} angle={45} tickCount={6} tick={{fontSize: 10}} />
                <YAxis tickFormatter={formatYAxis} tick={{fontSize: 10}} />
                <Tooltip />
                <Legend/>
                <Line type="monotone" dataKey="Cost" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Units Sold" stroke="#FF3131" />
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Plotter
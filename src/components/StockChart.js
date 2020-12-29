import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const API_KEY = '76TCXLOAUCLBZQ78'

const StockChart = (props) => {
    const [data,setData] = useState({})

    useEffect(()=>{
        
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${props.symbol}&outputsize=compact&apikey=${API_KEY}`

        axios.get(url)
        .then(response => {
            const allData = response.data
            setData(allData)
        })
        .catch(err => {return 'Error: ' + err})

    },[props])

    // console.log('data: ', data)

    const fData = {...data}
    const fTitle = {...fData["Meta Data"]}
        const title = fTitle["2. Symbol"]
    
    const fDailyData = {...fData["Time Series (Daily)"]}
        const dates = Object.keys(fDailyData)
        dates.sort()
        const newData = Object.values(fDailyData)
        newData.reverse()
    
    return (
        <Line
            data = {{
                labels: dates.map(date=>date),
                datasets: [
                    {
                        data: newData.map(data => data["2. high"]),
                        label: title ? title : 'Loading data...',
                        borderColor:'#00ccff',
                        borderWidth: 2,
                        backgroundColor:'rgba(0,204,255,0.1)',
                        fill: true,
                    },
                ]
            }}
        />
    )
    
}

export default StockChart

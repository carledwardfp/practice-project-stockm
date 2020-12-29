import React, { useState, useEffect } from 'react'
import Chart from '../components/Chart'
import Summary from '../components/Summary'
import axios from 'axios'

const API_KEY = '76TCXLOAUCLBZQ78'
const url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=PHP&apikey=${API_KEY}`

function BTC () {
    const [data, getData] = useState({})

    useEffect(()=>{
        getAllData()
    },[])

    const getAllData = () => {
        axios.get(url)
        .then(response => {
            const allData = response.data
            getData(allData)
        })
        .catch(err => ('Error: ', err))
    }

    if(data) {
        return (
            <>
                <Summary data={data} />
                <Chart data={data} />
            </>
        )
    } else {
        return (
            <h1>Loading!</h1>
        )
    }

    
}

export default BTC

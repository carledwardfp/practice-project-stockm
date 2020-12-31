import React, { useState } from 'react'
import StockChart from '../components/StockChart'
import axios from 'axios'

const API_KEY = '76TCXLOAUCLBZQ78'

function StockMarket() {
    const [key, setKey] = useState('')
    const [stockData, setStockData] = useState({})
    const [selectValue, setSelectValue] = useState('')

    const getAllData = (url) => {
        axios.get(url)
        .then(response => {
            const allData = response.data
            setStockData(allData)
        })
        .catch(err => {return 'Error: ' + err})
    }

    const handleChange = e => {setKey(e.target.value)}
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let keyword = key
        const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${API_KEY}`

        getAllData(url)

        setKey('')
    }

    const handleSelect = e => {setSelectValue(e.target.value)}

    // console.log(selectValue)

    return (
        <div className='stockmarket'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter company name"
                    style={{width: '500px', height: '50px', fontSize: '2em'}}
                    value={key}
                    onChange={handleChange}
                />
                <button
                    style={{height: '50px', width: '50px', fontSize: '2em'}}
                    type='submit'
                ><i class="fas fa-search-dollar" /></button>
            </form>
            {stockData.bestMatches ? (
                <select
                    style={{height: '50px', width: '550px', fontSize: '1.5em'}}
                    value={selectValue}
                    onChange={handleSelect}
                >
                    <option value='0' disabled selected>Select company</option>
                    {stockData.bestMatches.map( option => (
                        <option
                            key={option['1. symbol']}
                            value={option['1. symbol']}
                        >
                            {option['2. name']} ({option['1. symbol']})
                        </option>
                    ))}
                </select>
            ) : (
                <select
                    style={{height: '50px', width: '550px', fontSize: '2em'}}
                >
                    <option value='0' disabled selected>No company selected</option> 
                </select>
            )}
            
            <StockChart symbol={selectValue}/>
        </div>
    )
}

export default StockMarket

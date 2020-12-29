import React from 'react'
import BTC from './pages/BTC'
import StockMarket from './pages/StockMarket'
import './styles.css'

function App () {
    return (
        <div className="container">
            <BTC />
            <br/><br/><br/>
            <StockMarket />
        </div>
    )
}

export default App

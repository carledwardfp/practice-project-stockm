import React from 'react'
import CountUp from 'react-countup'

class Summary extends React.Component {

    render () {
        const data = {...this.props.data}
        const copy = {...data["Time Series (Digital Currency Weekly)"]}
        const newD = Object.keys(copy)
        const asd = {...copy[newD[0]]}
        const latest = asd["2a. high (PHP)"]

        if (latest) {
            return (
                <div className="header">
                    <h1> 
                    1BTC = &#8369;{<CountUp
                        start={0}
                        end={latest ? latest : 0}
                        duration={1.5}
                        separator=','
                    />}
                    </h1>
                </div>
            )
        } else {
            return <div><h1>Loading data...</h1></div>
        }

        
    }
}

export default Summary

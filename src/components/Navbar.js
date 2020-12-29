import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo"><span className="spanwhite">CARL</span>EDWARD</h1>
            <ul className="nav-menu">
                <Link to='/'>
                    <li className="nav-links">
                        <div className='div-link'>
                            Bitcoin
                        </div>
                    </li>
                </Link>
                <Link to='/stockmarket'>
                    <li className="nav-links">
                        <div className='div-link'>
                            Stock Market
                        </div>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
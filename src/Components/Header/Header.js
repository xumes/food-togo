import React from 'react'
import logo from '../../images/logo.jpeg'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-dark fixed-top bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img alt="Food To Go" src={logo} height={80} /></Link>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
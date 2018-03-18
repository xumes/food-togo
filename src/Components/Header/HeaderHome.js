import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../images/logo.jpeg'
const HeaderHome = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h1 className="display-3 text-center"><img src={logo} className="App-logo" alt="logo" width="200" /></h1>
                    </div>
                    <div className="col-sm-8">
                    <ul>
                        <li><Link className="btn btn-signup btn-lg" to="/sign-up" role="button">Sign Up</Link></li>
                        <li><Link className="btn btn-signup btn-lg" to="/login" role="button">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderHome
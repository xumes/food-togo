import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'

import Header from '../Header/Header'
import Cousine from './Cousine'


const Cousines = (props) => {
    
        return (
            <div>
                <Header />
                <div className='container' style={{ paddingTop: '120px' }}>
                    <h1>Cousines</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <ul>
                                {
                                    props.cousines.map(
                                        cat => {
                                            return (
                                                <li >
                                                    <Link to={`/cousines/${cat.url}`}>{cat.cousine} </Link>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>

                        <div className="col-lg-8">

                            <Switch>
                                <Route path='/cousines/:idCousine' component={Cousine} />
                            </Switch>

                        </div>

                    </div>
                </div>
            </div>
        )

}


export default Cousines
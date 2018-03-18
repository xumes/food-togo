import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Header from '../Header/Header'
import Cousine from './Cousine'


const Cousines = (props) => {
    console.log("Inside Cousines.js", props)
    return (
        <div>
         
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            <Link to={`/`} key="{props.cousine.id}" className="btn btn-secondary h-100 m-2 col-sm">
                                <i className={`fa fa-food fa-4x`} aria-hidden="true"></i><br />
                                {props.cousine.name}
                            </Link>
                        </ul>
                    </div>
                    </div>
                    <div className="row">

                    <div className="col-lg-8">

                        <Switch>
                            <Route path='/cousines/:idCousine' component={Cousine} />
                        </Switch>

                    </div>

                </div>
            </div>
    )

}


export default Cousines
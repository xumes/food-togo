import React from 'react'
import { Link, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Products from './Products'

const Stores = ({ store }) => {
    console.log("Inside Stores: ", store)
    return (
        <div className="card h-100">
            <div className="card-body">
                <h4 className="card-title">
                    <Link to={`/store/list/${store.id}`}>{store.name}</Link>
                </h4>
                <h5>{store.cousineId}</h5>
                <p className="card-text">{store.address}</p>
            </div>
        </div>

        


    )
}

export default Stores
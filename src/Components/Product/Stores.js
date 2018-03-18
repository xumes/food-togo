import React from 'react'
import { Link, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Products from './Products'

const Stores = ({ store }) => {
    return (
        <div>
          
            <div className='container' style={{ paddingTop: '120px' }}>
                <div className="col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link to={`/store/list/${store.storeId}`}>{store.name}</Link>
                            </h4>
                            <h5>{store.cousineId}</h5>
                            <p className="card-text">{store.address}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">

                    <Route path='/store/list/:idStore' component={Products} />

                </div>
            </div>
        </div>
    )
}

export default Stores
import React from 'react'


const Stores = ({store}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h4 className="card-title">
                        <a to={`/store/list/${store.storeId}`}>{store.name}</a>
                    </h4>
                    <h5>Cousine</h5>
                    <p className="card-text">Description</p>
                </div>
            </div>
        </div>
    )
}

export default Stores
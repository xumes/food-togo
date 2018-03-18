import React, {Component} from 'react'
import axios from 'axios'

import HeaderHome from '../Components/Header/HeaderHome';
import Stores from './Product/Stores'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            stores: []
        }

        this.getStores = this.getStores.bind(this)

        this.getStores(props.cousineId)
    }

    getStores(cousineId){
        const url = ''

    }

    render(){
        return (
            <div >
                <HeaderHome />
                <div className="container">
                    <h3>Stores</h3>
                    <div className="row">
                            {Object.keys(this.state.stores).map(key => {
                                const anuncio = this.state.stores[key]
                                return <Stores key={key} store={this.state.store} />
                            })}
    
                        </div>
                </div>
            </div>
        )
    }
    
}


export default Home
import React, { Component } from 'react'
import axios from 'axios'

import HeaderHome from '../Components/Header/HeaderHome';
import Stores from './Product/Stores'
import Cousines from './Product/Cousines'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stores: [],
            cousines: []
        }

        this.getStores = this.getStores.bind(this)
        this.getCousines = this.getCousines.bind(this)

        this.getStores(props.cousineId)
        this.getCousines()
    }

    getStores(cousineId) {
        const url = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store'
        axios
            .get(url)
            .then(data => {
                this.setState({ stores: data.data, cousines: this.state.cousines })
            })
    }

    getCousines() {
        const url = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Cousine'
        axios
            .get(url)
            .then(data => {
                this.setState({ cousines: data.data, stores: this.state.stores })
            })
    }

    render() {
        let index = 0
        return (
            <div >
                <HeaderHome />
                <div className="container">
                    <h3>Stores</h3>
                    <div className="row">

                        {Object.keys(this.state.stores).map(key => {
                            const store = this.state.stores[key]
                            return (
                                <div className="col-md-4" key={key}>
                                    <Stores key={key} store={store} />
                                </div>
                            )
                        })}
                    </div>
                    <br />
                    <h3>Cousines</h3>
                    <div className="row">
                        {Object.keys(this.state.cousines).map(key => {
                            const cousine = this.state.cousines[key]
                            return [
                                <div className="col-md-3" key={key}>
                                    <Cousines cousine={cousine} key={key} />
                                </div>
                            ]
                        })}

                    </div>

                </div>
            </div>
        )
    }

}


export default Home
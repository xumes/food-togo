import React, { Component } from 'react'
import axios from 'axios'

class Cousine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stores: {}
        }

        this.getStore = this.getStore.bind(this)
        
        this.getStore(this.props.params.idCousine)
    }

    getStore(idCousine){
        const url = `http://api-vanhack-event-sp.azurewebsites.net/api/v1/Cousine/${idCousine}/stores`
        axios
        .get(url)
        .then(data => {
            this.setState({ stores: data.data })
            this.cousine = idCousine
        })
    }

    render() {
        return (
            <h1>Cousine: {JSON.stringify(this.props)}</h1>
        )
    }
}


export default Cousine
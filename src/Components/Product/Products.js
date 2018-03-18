import React, { Component } from 'react'
import axios from 'axios'

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

        this.getProduct = this.getProduct.bind(this)

        this.getProduct(this.props.match.params.storeId)
    }


    getProduct(storeId) {
        const url = `http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store/${storeId}/products`
        axios.get(url)
            .then(data => {
                this.setState({ products: data.data })
                this.storeId = storeId
            })
    }

    render() {
        console.log(this.state.products)
        return (
            <div>
                <h3>Products</h3>
                
                    {
                        this.state.products.map(key => {
                            const product = key
                            return <p>{product}</p>
                        })
                    }
                
            </div>
        )
    }

}

export default Products
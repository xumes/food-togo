import React, { Component } from 'react'
import axios from 'axios'

import Header from '../Header/Header'

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            cart: {
                qty: 0
            }
        }

        this.getProduct = this.getProduct.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this)

        this.getProduct(this.props.match.params.storeId)
    }

    addProduct(id) {
        console.log('Adding product: ', id)
        this.setState({
            cart: {
                id: id,
                qty: this.state.cart.qty + 1
            }
        })
        console.log(this.state.cart)
    }

    removeProduct(id) {
        console.log('Removing product: ', id)
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
                <div className='container' style={{ paddingTop: '120px' }}>
                    <Header />
                    <h3>Products</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="99">
                                <td>Pizza</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => this.addProduct(99)}>+ 1</button>
                                    <span> {this.state.cart.qty} </span>
                                    <button className="btn btn-warning" onClick={() => this.removeProduct(99)}>- 1</button>
                                </td>
                            </tr>
                            <tr key="199">
                                <td>Pao de Queijo </td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => this.addProduct(199)}>+ 1</button>
                                    <button className="btn btn-warning" onClick={() => this.removeProduct(199)}>- 1</button>
                                </td>
                            </tr>
                            {
                                this.state.products.map(product => {
                                    return (<tr key="{product.id}"> <td >
                                        {product.name}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => this.addProduct(product.id)}>+ 1</button>
                                            <button className="btn btn-warning" onClick={() => this.removeProduct(product.id)}>- 1</button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }

}

export default Products
import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

import Header from '../Header/Header';

class CustomerNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customer: {},
            success: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
    }

    handleSubmit() {
        const newCustomer = {
            name: this.name.value,
            email: this.email.value,
            address: this.address.value,
            password: this.password.value
        }
        this.addCustomer(newCustomer)
    }

    addCustomer(customer) {
        const url = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Customer'
        console.log("acessing: ", url)
        console.log("to insert", customer)

        axios.post(url, customer)
            .then(data => {
                console.log("result from post new customer", data)
                this.setState({
                    customer: data.data,
                    success: true
                })


            })
            .catch(err => {
                console.log("something went wrong", err)
            })
    }

    render() {
        return (
            <div>
                {this.state.success && <Redirect to='/' />}
                <div className='container' style={{ paddingTop: '120px' }}>
                    <Header />
                    <h1>New Customer</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="name"> Name </label>
                            <input type='text' className='form-control' id='name' autoComplete='name' placeholder='Name' ref={(ref) => this.name = ref} />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email"> Email </label>
                            <input type='email' className='form-control' id='email' autoComplete='email' placeholder='name@email.com' ref={(ref) => this.email = ref} />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="address"> Address </label>
                            <textarea type='text' className='form-control' id='address' autoComplete='address' placeholder='Address' ref={(ref) => this.address = ref} />
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password"> Password </label>
                            <input type='password' className='form-control' id='password' ref={(ref) => this.password = ref} />
                        </div>
                        <button type='submit' className='btn btn-primary'>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}



export default CustomerNew
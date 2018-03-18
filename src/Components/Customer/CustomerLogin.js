import React, { Component } from 'react'
import axios from 'axios'

import Header from '../Header/Header'
import logo from '../../images/logo.jpeg'

class CustomerLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            token:''
        }

        this.handleLogin = this.handleLogin.bind(this)
        this.authenticate = this.authenticate.bind(this)
    }

    handleLogin() {
        const login = {
            email: this.user.value,
            password: this.password.value
        }

    }

    authenticate(login) {
            const url = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Customer/auth'
            console.log("login in: ", login)

            axios.post(url, login)
            .then(data => {
                console.log(data)
                this.setState({
                    user: login,
                    token: data
                })
            })
    }

    render() {
        return (
            <div className='container' style={{ paddingTop: '120px' }}>
                <Header />
                <h1>Acess the platform</h1>
                <form className="form-signin" onSubmit={this.handleLogin}>
                    <h1 className="display-3 text-center"><img src={logo} className="App-logo" alt="logo" width="200" /></h1>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label"> Email </label>
                        <div className="col-sm-10">
                            <input type='email' className='form-control' id='email' placeholder='name@email.com' ref={(ref) => this.email = ref} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label"> Password </label>
                        <div className="col-sm-10">
                            <input type='password' className='form-control' id='password' ref={(ref) => this.password = ref} />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Access</button>
                </form>

            </div>
        )
    }
}

export default CustomerLogin


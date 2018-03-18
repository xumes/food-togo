import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import './App.css';
import Home from './Components/Home'
import CustomerNew from './Components/Customer/CustomerNew'
import CustomerLogin from './Components/Customer/CustomerLogin'
import Cousines from './Components/Product/Cousines'
import Products  from './Components/Product/Products'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cousines:[]
    }

    this.getCousines()
  }

  getCousines() {
    const url = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Cousine'
    axios
      .get(url)
      .then(data => {
        console.log("return from getcousines", data)
        this.setState({ cousines: data })
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={() => <Home />} />
          <Route path="/sign-up" exact render={() => <CustomerNew />} />
          <Route path="/login" exact render={() => <CustomerLogin />} />
          <Route path='/cousines' exact render={() => <Cousines cousines={this.state.cousines} />} />
          <Route path='/store/list/:storeId' component={Products} />
        </div>
      </Router>
    );
  }
}

export default App;

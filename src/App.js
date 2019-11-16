import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './Login';
import CreateTable from './CreateTable.js';
import { thisExpression } from '@babel/types';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'token': '',
      'emails': []
    }
    this.emailData = '';

    this.apiPull = this.apiPull.bind(this);
    this.getTokenFromChild = this.getTokenFromChild.bind(this);
  }

  apiPull() {
    // this.state.token

    const config = {
      headers: {
        'Authorization': "Bearer " +
          this.state.token,
        'crossDomain': true,
        'Content-Type': 'application/json',
      },
      defaults: {
        'crossDomain': true,
      }
    }


    axios.get('http://127.0.0.1:8000/api/email', config)
      .then(res => {
        const emailData = res.data
        this.setState({ emails: emailData })
        console.log(this.state.emails)
      })


  };

  getTokenFromChild(token) {
    this.setState({ 'token': token })
  }


  render() {

    if (this.state.token === '' && localStorage.length === 0) {
      console.log(this.state.emails)
      return (
        <div className="App">

          <Login isLogin={this.getTokenFromChild} />

        </div>
      )
    }
    else {
      // if (this.state.emails == [] ) { 
        this.apiPull();
        console.log(this.state.emails)
      // }
      
      
      // console.log(this.state)
      return (
        <div>

          {/* <img src="/IMG_0424.jpg"></img> */}
          {this.state.emails ? <CreateTable dataTable={this.emailData} /> : <h1>Loading</h1>}

        </div>
      );
    }

  }
}


export default App;

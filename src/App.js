import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './Login';

class App extends React.Component {

apiPull(){axios.get('http://127.0.0.1:8000/')
    .then(response => {
      const emailData = response.data;
      console.log(emailData);
    })}


render () {    
  return (
    <div className = "App">
      <Login />
    </div>
)}}


export default App;

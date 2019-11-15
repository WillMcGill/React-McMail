import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './Login';
// import CreateTable from './CreateTable.js';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = { 'token': ''
   }
   this.getTokenFromChild = this.getTokenFromChild.bind(this);
  }

apiPull(){axios.get('http://127.0.0.1:8000/')
    .then(response => {
      const emailData = response.data;
      console.log(emailData);
    })};




getTokenFromChild(token){
    this.setState({'token': token})
    console.log('parent state', this.state.token);
}


render () { 
  
  if (this.state.token === ''){
  return (
    <div className = "App">
      <Login isLogin = {this.getTokenFromChild} />
      {/* <CreateTable /> */}
    </div>
)}
    else{
      return(
        <div> 
          <h1>I'm an idiot!</h1>
            <img src="/IMG_0424.jpg"></img>
            
          
          </div>
      );
    }

}
}


export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Login from'./Components/Login.js';
import Main from './Components/Main.js';


export default class App extends React.Component{
  render(){
    return(
    	<div>
    	<Login/>
    	<Main/>
    	</div>
      
      )
  }
}
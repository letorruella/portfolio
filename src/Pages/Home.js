import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Routes from './routes.js'
import {Link }from 'react-router-dom'


class Home extends React.Component{
   render(){
       return(
         <div>  
            <h1> # Maria Is AWESOME!! </h1>
            <Link to="/resume">resume</Link>
         </div>
        )
   }
  }
  
  export default Home;
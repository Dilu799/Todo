import React, { Component } from 'react';
// import About from './components/About/About';
import Header from './components/Header/Header';
import TodoApp from './components/TodoApp/TodoApp';
import Nothing from './components/Nothing/Nothing '
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default ()=>{  
    return (
        <Router>
        <Header/>
          <Route path='/' exact component={TodoApp}/>
          {/* <Route path='/about' component={About}/> */}
          <Route path='/nowhere' component={Nothing}></Route>
        </Router>
    );
};


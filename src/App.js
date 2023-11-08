import './App.css';

import React, { Component } from 'react'
import NavBar from './components/navbar';
import News from './components/News';
import {
  BrowserRouter ,
  Routes,
  Route,
  // Link
  } from "react-router-dom";
export default class App extends Component {

  
  render() {
    return (
      <div >
      <BrowserRouter>
    
     
    <NavBar/>
   
   
    <Routes>
    <Route  path="/NEWS_APP" element={<News pageSize={3} country="in"  category="general" />}></Route> 
    <Route path="/general" element={<News key="general" pageSize={3} country="in"  category="general" />}></Route> 
    <Route path="/health"element={<News key="health"pageSize={3} country="in"  category="health" />}></Route> 
    <Route path="/business"element={<News key="business"pageSize={3} country="in"  category="business" />}></Route> 
    <Route path="/technology"element={<News key="technology"pageSize={3} country="in"  category="technology" />}></Route> 
    <Route path="/science" element={<News key="science"pageSize={3} country="in"  category="science" />}></Route> 
    </Routes>
    {/*  */}

    </BrowserRouter>
    </div>
    )
  }
}


import './App.css';

import React, { Component } from 'react'
import NavBar from './components/navbar';
import News from './components/News';
// import {
//   BrowserRouter ,
//   Routes,
//   Route,
//   // Link
//   } from "react-router-dom";
export default class App extends Component {

  
  render() {
    return (
      <div >
      {/* <BrowserRouter  > */}

    <NavBar/>
    <News key="generl" pageSize={3} country="in"  category="general"/>
    {/* <Routes>
    <Route  exacet path="/NEWS_APP" element={<News key="generl" pageSize={3} country="in"  category="general"/>}></Route> 
    <Route exact path="/NEWS_APP/general" element={<News key="general" pageSize={3} country="in"  category="general" />}></Route> 
    <Route exact path="/NEWS_APP/health"element={<News key="health"pageSize={3} country="in"  category="health" />}></Route> 
    <Route exact path="/NEWS_APP/business"element={<News key="/business"pageSize={3} country="in"  category="business" />}></Route> 
    <Route  exact path="/NEWS_APP/technology"element={<News key="technology"pageSize={3} country="in"  category="technology" />}></Route> 
    <Route exact path="/NEWS_APP/science" element={<News key="science"pageSize={3} country="in"  category="science" />}></Route> 
    </Routes> */}
    {/*  */}

    {/* </BrowserRouter> */}
    </div>
    );
  }
}


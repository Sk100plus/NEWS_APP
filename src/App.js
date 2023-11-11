import './App.css';

import React, { Component } from 'react'
import NavBar from './components/navbar';
import News from './components/News';
import NewsH from './components/NewsH';
import NewsB from './components/NewsB';
import NewsSci from './components/NewsSci';
import NewsTech from './components/NewsTech';
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
      <BrowserRouter  >

    <NavBar/>
    {/* <News key="general" pageSize={3} country="in"  category="general"/> */}
    {/* <News1 exact path="/NEWS_APP/health"element={<News1 key="health"pageSize={3} country="in"  category="health" />}/> */}
 <Routes>
    <Route  exacet path="/NEWS_APP" element={<News key="generl" pageSize={3} country="in"  category="general"/>}></Route> 
    <Route exact path="/NEWS_APP/health" element={<NewsH key="health" pageSize={3} country="in"  category="health" />}></Route> 
    <Route exact path="/NEWS_APP/science"element={<NewsSci key="/science"pageSize={3} country="in"  category="science" />}></Route> 
    <Route  exact path="/NEWS_APP/technology"element={<NewsTech key="technology"pageSize={3} country="in"  category="technology" />}></Route> 
    <Route exact path="/NEWS_APP/business" element={<NewsB key="business"pageSize={3} country="in"  category="business" />}></Route> 
    </Routes>
    {/*  */}

    </BrowserRouter>

    </div>
    );
  }
}


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
  import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {

state={
  progress:0
}
apiKey=process.env.REACT_APP_NEWS_API;
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div >
      <BrowserRouter  >
      <LoadingBar
        color='red'
        progress={100}
        height={4}
      /> 
    <NavBar/>
   
    {/* <News key="general" pageSize={3} country="in"  category="general"/> */}
    {/* <News1 exact path="/NEWS_APP/health"element={<News1 key="health"pageSize={3} country="in"  category="health" />}/> */}
 <Routes>
    <Route  exacet path="/NEWS_APP" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={20} country="in"  category="general"/>}></Route> 
    <Route exact path="/NEWS_APP/health" element={<NewsH setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={20} country="in"  category="health" />}></Route> 
    <Route exact path="/NEWS_APP/science"element={<NewsSci setProgress={this.setProgress} apiKey={this.apiKey} key="/science"pageSize={20} country="in"  category="science" />}></Route> 
    <Route  exact path="/NEWS_APP/technology"element={<NewsTech setProgress={this.setProgress} apiKey={this.apiKey} key="technology"pageSize={20} country="in"  category="technology" />}></Route> 
    <Route exact path="/NEWS_APP/business" element={<NewsB setProgress={this.setProgress} apiKey={this.apiKey} key="business"pageSize={20} country="in"  category="business" />}></Route> 
    </Routes>
    {/*  */}
   
    </BrowserRouter>

    </div>
    );
  }
}


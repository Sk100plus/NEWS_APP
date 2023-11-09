import React, { Component } from 'react'
// import {Link} from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <>
      <div> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">NewsMonkey</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
       <li className="nav-item active">
        <a className="nav-link" href="/NEWS_APP">Home <span className="sr-only">(current)</span></a>
      </li> 
      {/* // businessentertainmentgeneralhealthsciencesportstechnology */}
      <li className="nav-item">
        <a className="nav-link" href="/NEWS_APP/business">Business</a>
      </li>     <li className="nav-item">
        <a className="nav-link" href="/NEWS_APP/health">Health</a>
      </li>     <li className="nav-item">
        <a className="nav-link" href="/NEWS_APP/general">General</a>
      </li>     <li className="nav-item">
        <a className="nav-link" href="/NEWS_APP/science">Science</a>
      </li>     <li className="nav-item">
        <a className="nav-link" href="/NEWS_APP/technology">Technology</a>
      </li>
    </ul>
   </div>
</nav>
      </div>
     
      </>
      
    )
  }
}

export default NavBar;

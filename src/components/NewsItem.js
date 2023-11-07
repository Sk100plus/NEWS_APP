import React, { Component } from 'react'

export class NewsItem extends Component {

  // If you want to write constructor then u should call super class if its have an object!



  render() {
    let { title, description, newsurl, imageurl, author, date, sources } = this.props;
    return (
      <div className="my-3 ">
        
        <div  className=" card postion-relative" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-light" style={{left:'-10%',top:'-2%',zIndex:'1'}}>
{sources}  </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{title}
        </h5>
        
  
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By : {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark ">Go somewhere
          </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

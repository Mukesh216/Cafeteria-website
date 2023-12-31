import React from 'react';

import "../App.css";
import { Link } from 'react-router-dom';

function Tea() {
  return (
    <div className='Cards' id='Tea card'>
      <div className="card  border border-danger-subtle border-4" >
        <img className='rounded-bottom-4 p-1' src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1701484050/pexels-the-masked-guy-3644476_bmpioh.jpg" alt="coffee-img" ></img>
        <div className="card-body text-center">
          <h5 className="card-title"  style={{fontFamily : "Arvo"}}>Tea</h5>
          <p className="card-text fw-semibold d-none d-sm-block"   style={{fontFamily : "Ysabeau Infant"}}>Explore a world of flavors with our curated tea collection, offering tranquility in every steeped cup</p>
          <Link className="btn btn-outline-primary ms-2 fw-semibold" to='/menu' style={{fontFamily : "Sono"}}>Explore Menu</Link>
        </div>
      </div>
    </div>

  );
};

export default Tea
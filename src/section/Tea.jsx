import React from 'react';

import "../App.css";

function Tea() {
  return (
    <div className='Cards' id='Tea card'>
      <div className="card  border border-danger-subtle border-4" >
        <img className='rounded-bottom-4 p-1' src="src\assets\pexels-the-masked-guy-3644476.jpg" alt="coffee-img" ></img>
        <div className="card-body text-center">
          <h5 className="card-title"  style={{fontFamily : "Arvo"}}>Tea</h5>
          <p className="card-text fw-semibold d-none d-sm-block"   style={{fontFamily : "Ysabeau Infant"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-outline-primary ms-2 fw-semibold"  style={{fontFamily : "Sono"}}>Explore Menu</a>
        </div>
      </div>
    </div>

  );
};

export default Tea
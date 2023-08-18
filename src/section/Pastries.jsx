import React from 'react';

import "../App.css"

function Pastries() {
  return (
    <div className='Cards' id='Pastry card'>
      <div className="card border border-danger-subtle border-4">
        <img className='rounded-bottom-4 p-1  ' src='src\assets\pexels-tima-miroshnichenko-7034520.jpg' alt="pastries-img" ></img>
        <div className="card-body text-center">
          <h5 className="card-title"  style={{fontFamily : "Arvo"}}>Pastries</h5>
          <p className="card-text fw-semibold d-none d-sm-block"   style={{fontFamily : "Ysabeau Infant"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-outline-primary ms-2 fw-semibold"  style={{fontFamily : "Sono"}}>Explore Menu</a>
        </div>
      </div>

    </div>

  );
};

export default Pastries
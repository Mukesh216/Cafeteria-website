import React from 'react';

import "../App.css"

function Pastries() {
  return (
    <div className='Cards' id='Pastry card'>
      <div className="card border border-danger-subtle border-4">
        <img className='rounded-bottom-4 p-1  ' src='https://res.cloudinary.com/dfsvudyfv/image/upload/v1701484028/pexels-tima-miroshnichenko-7034520_xnmnor.jpg' alt="pastries-img" ></img>
        <div className="card-body text-center">
          <h5 className="card-title"  style={{fontFamily : "Arvo"}}>Pastries</h5>
          <p className="card-text fw-semibold d-none d-sm-block"   style={{fontFamily : "Ysabeau Infant"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  className="btn btn-outline-primary ms-2 fw-semibold" href='/menu'  style={{fontFamily : "Sono"}}>Explore Menu</a>
        </div>
      </div>

    </div>

  );
};

export default Pastries
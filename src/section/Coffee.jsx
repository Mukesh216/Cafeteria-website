import React from 'react';
import { useState } from 'react';
import Drinks from './Drinks';
import "../App.css";



function Coffee() {

  return (

    <div className='Cards' id='coffee card'>
      <div className="card border border-danger-subtle border-4" >
        <img className='rounded-bottom-4 p-1 ' src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1701483961/pexels-chevanon-photography-312418_sjpkys.jpg" alt="coffee-img" ></img>
        <div className="card-body text-center" >
          <h5 className="card-title"  style={{fontFamily : "Arvo"}}>Coffee</h5>
          <p className="card-text fw-semibold d-none d-sm-block "   style={{fontFamily : "Ysabeau Infant"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a className="btn btn-outline-primary ms-2 fw-semibold" id='coffeeExplore'  style={{fontFamily : "Sono"}}>Explore Menu </a>
        </div>
      </div>
    </div>


  );
};

export default Coffee
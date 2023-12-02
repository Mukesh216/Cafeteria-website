import React from "react";
import "../App.css"
import { Link } from "react-router-dom";


function Drinks() {
  return (
    <div className='Cards' id="Drink card">
      <div className="card  border border-danger-subtle border-4" >
        <img className='rounded-bottom-4 p-1' src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1701483982/juice_kacphb.jpg" alt="coffee-img" ></img>
        <div className="card-body text-center">
          <h5 className="card-title"  style={{fontFamily : "Arvo"}}>Juices</h5>
          <p className="card-text fw-semibold d-none d-sm-block"   style={{fontFamily : "Ysabeau Infant"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link  className="btn btn-outline-primary ms-2 fw-semibold" href='/menu'  style={{fontFamily : "Sono"}}>Explore Menu </Link>
        </div>
      </div>
    </div>

  )
}

export default Drinks
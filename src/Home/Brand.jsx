import React from 'react';
import { Link } from 'react-scroll';

function Brand() {

  return (
    <div className='d-flex  d-none d-md-block d-lg-block justify-content-center align-items-center col-lg-12 position-relative mt-5 ' style={{height:1100} }>
    <img src="src/assets/bb2.jpg" className="img-fluid w-100 h-100 object-fit-cover" alt="brand-img" />
    <div className=" position-absolute justify-content-center bottom-0 start-50 translate-middle-x" style={{top: "70%"}}>
      <Link to="section" smooth={true} duration={0.5} offset={-50} >
        <i className="fa-sharp fa-solid fa-chevron-down fs-1 text-black rounded-circle p-3 border border-4 border-white animation-effect" style={{ animation: 'colorTransition 1s linear infinite', cursor: "pointer" }}></i>
      </Link>
    </div>
  </div>
  

  );
}

export default Brand;

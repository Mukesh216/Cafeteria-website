import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

function Brand() {

  
  useEffect(() => {
    window.scrollTo(0, 0);

    const select = document.querySelectorAll('.home-brand-img');

    console.log(select);

    select.forEach((item) => {

      const im = item.querySelector('img');

      function loaded() {
        item.classList.add('loaded');
      }

      if (im.complete) {
        loaded();
      }
      else {
        im.addEventListener('load', loaded);

      }
    }
    );

    console.log("see = " , select);
   
  }, []);
  

  return (
    <div className='d-flex d-md-block d-lg-block home-brand-img justify-content-center align-items-center col-lg-12 position-relative mt-5 vh-100'
    style={{
      backgroundImage : "url('https://res.cloudinary.com/dfsvudyfv/image/upload/v1704037597/bb2_rt6y9q_1_v3c9zp.jpg')",
      backgroundSize : "cover",
      backgroundPosition : "center", 
    }}
    >
      <img src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1701414801/bb2_rt6y9q.jpg" className="img-fluid w-100 h-100  object-fit-cover" alt="brand-img" />
      <div className='position-absolute title-div start-50 translate-middle text-center'>
        <h1 className="text-white fw-bold title ">Cafe BROS</h1>
      </div>
      <div className="position-absolute arrow justify-content-center start-50 translate-middle-x ">
        <Link to="section" smooth={true} duration={0.5} offset={-50}>
          <i className="fa-sharp fa-solid fa-chevron-down fs-1 text-white rounded-circle p-3 arri animation-effect" style={{ animation: 'colorTransition 1s linear infinite', cursor: "pointer" }}></i>
        </Link>
      </div>
    </div>
  );
}

export default Brand;

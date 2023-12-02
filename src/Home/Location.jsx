import React from "react";

function Location() {
  return (
    <section>
      <div className="bgLoc p-5 ">
        <div className="text-center mb-5 text-glow">
          <h1
            style={{
              fontFamily: "Pacifico",     
              color:"#000000"    ,
              fontSize:70   
            }}

          >
            Our Location
          </h1>
        </div>
        <div className="d-flex justify-content-evenly mb-5 ">
          <div className="loc">
            <div className="text-center fs-4   ">
              <h3
                style={{
                  fontFamily: "Pacifico",
                }}
              className="mb-4 border-bottom border-white text-white pb-2 "
              >
                Farmville
              </h3>
              <p 
              className="text-white fs-6"
              style={{
                fontFamily: "poppins",
                fontWeight:600
              }}>
                236 N. Main St. Farmville,
                <br /> VA 23901
              </p>
            </div>
            <div className="loc_container"></div>
          </div>

          <div className="text-center fs-5 ">
            <h3
              style={{
                fontFamily: "Pacifico",
              }}
              className="mb-4 border-bottom border-white text-white pb-2"
            >
              Hours
            </h3>
            <p className="text-center text-white fs-6 " style={{
                fontFamily: "poppins",
                fontWeight:600
                
              }}>
              Monday - Friday : 7:30 am - 5:00 pm <br />
              Saturday : 8:00 am - 6:00 pm <br />
              Sunday : 9:00 am - 3:00 pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;

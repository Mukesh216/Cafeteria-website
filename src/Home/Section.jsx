import React from "react";
import Coffee from "../section/Coffee";
import Tea from "../section/Tea";
import Drinks from "../section/Drinks";
import Pastries from "../section/Pastries";


function Section() {
    return (
        <div className="sec pt-5 pt-md-0 " id="section"  >
            <div className="bgDiv">
                <div className="container pt-4 pb-3">
                    <div className="row">
                        <div className="col-6 col-lg-3 col-md-6 px-2 pb-3  ">
                            <Coffee></Coffee>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6  px-2 pb-3 ">
                            <Tea></Tea>

                        </div>
                        <div className=" col-6 col-lg-3  px-2 pb-3 col-md-6">
                            <Pastries></Pastries>

                        </div>
                        <div className="col-6 col-lg-3  px-2 pb-3 col-md-6">
                            <Drinks></Drinks>

                        </div>

                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Section;
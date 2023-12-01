import React from "react";
import Coffee from "../section/Coffee";
import Tea from "../section/Tea";
import Drinks from "../section/Drinks";
import Pastries from "../section/Pastries";
import 'animate.css';

function Section({animated}) {
    return (
        <div className="sec " id="section">
            <div className="bgDiv ">
                <div className="container pt-4 pt-md-5 pb-3">
                    <div className="row">
                        <div className={`col-6 col-lg-3 col-md-6 px-2 pb-3  ${animated ? 'animate__animated animate__fadeInDown' : ''}`}>
                            <Coffee></Coffee>
                        </div>
                        <div className={`col-6 col-lg-3 col-md-6  px-2 pb-3 ${animated ? 'animate__animated animate__fadeInDown' : ''}`}>
                            <Tea></Tea>

                        </div>
                        <div className={` col-6 col-lg-3  px-2 pb-3 col-md-6 ${animated ? 'animate__animated animate__fadeInUp' : ''}`}>
                            <Pastries></Pastries>

                        </div>
                        <div className={` col-6 col-lg-3  px-2 pb-3 col-md-6 ${animated ? 'animate__animated animate__fadeInUp' : ''}`}>
                            <Drinks></Drinks>

                        </div>

                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Section;
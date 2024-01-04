import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about-div p-4 pt-4 col-md-12" style={{
            backgroundColor: "#fff4e0"
        }}>
            <h1 className="about-h1 mt-lg-5 text-center text-black" style={{ fontFamily: "pacifico" }}>Welcome to Best Cafe corner in Kovai</h1>
            <h6 className="p-2 pt-4 pb-5 text-center text-danger mb-4 fw-semibold " style={{ fontFamily: "Sono" }}>A gathering place in East Kovai Farmville! Stop by and enjoy <br></br> coffee, tea, live music, soups, salad, sandwiches, ice cream and much more!</h6>
            <div className="aboutDesc" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

            }}>
                <div className=" d-flex justify-content-center flex-column flex-lg-row mx-xl-5 row">
                    <div className="col-lg-4   d-flex justify-content-center ">
                        <img
                            className="ab-img mx-auto"
                            src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1690631403/foods/cafe_q7qp0s.jpg" alt=""
                            style={{
                                backgroundSize: "cover",
                            }}
                        >
                        </img>
                    </div>
                    <div className="mt-5 d-flex flex-column justify-content-center col-lg-6">
                        <div >
                            <h1 className="about-h2 text-center" style={{ fontFamily: "pacifico" }}>Serving Since 1995!</h1>
                            <p className="about-p2 text-center mt-4 ms-3" style={{ fontFamily: "Prompt" }}>Established in 1995, CafeBROS in East Kovai is a family-owned business  that brings people together through its exceptional coffee, delicious food, and live music events. Passionate about fostering community connections, we create a warm and inviting space for all to enjoy.</p>
                        </div>
                        <br />
                        <div className="text-center ">
                            <Link to="/events" className="text-black" style={{ textDecoration: "none" }}>
                                <button className="text-center fs-5 p-2" style={{
                                    fontFamily: "poppins",
                                    letterSpacing: "2px",
                                    fontWeight: 600,
                                    backgroundColor: "#fff4e0",
                                    borderBottomColor: "black",
                                    boxShadow: "5px 5px black", 
                                }} onClick={() => window.scrollTo(0, 0)}>UPCOMING EVENTS</button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;

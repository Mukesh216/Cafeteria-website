import  React from "react";
import Section from "./Section";
import About from "./About";
import Brand from "./Brand";
import Location from "./Location";
import "../App.css"


function Landing({press}) {
    return (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <Brand></Brand>
            <Section ></Section>
            <About></About>
            <Location></Location>
        </div>
    )
}


export default Landing
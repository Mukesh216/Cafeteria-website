// import React, { useEffect, useState } from "react";
// import Section from "./Section";
// import About from "./About";
// import Brand from "./Brand";
// import Location from "./Location";
// import "../App.css"

// import HashLoader from "react-spinners/HashLoader";
// import 'animate.css';


// function Landing({ press }) {

//     //use state for loading
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
//         console.log(`Time to fully render: ${loadTime}ms`);
//         setTimeout(() => {
//             setLoading(false);
//         }, loadTime);

//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <>
//             {
//                 loading ?
//                     (
//                         <HashLoader className="vh-100 flex justify-center mx-auto" color="#896752" />
//                     ) :
//                     (
//                         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 animate__animated animate__fadeInDown">
//                             <Brand></Brand>
//                             <Section ></Section>
//                             <About></About>
//                             <Location></Location>
//                         </div>
//                     )
//             }
//         </>

//     )
// }


// export default Landing
import React, { useEffect, useState } from "react";
import { Element } from 'react-scroll';
import { Waypoint } from 'react-waypoint';
import classNames from 'classnames';
import Section from "./Section";
import About from "./About";
import Brand from "./Brand";
import Location from "./Location";
import HashLoader from "react-spinners/HashLoader";
import 'animate.css';
import "../App.css";

function Landing() {
  const [loading, setLoading] = useState(true);
  const [sectionAnimated, setSectionAnimated] = useState(false);

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Time to fully render: ${loadTime}ms`);
    setTimeout(() => {
      setLoading(false);
    }, loadTime);

    window.scrollTo(0, 0);
  }, []);

  const handleSectionEnter = () => {
    console.log('section entered');
    setTimeout(() => {
      setSectionAnimated(true);
    }, 300);
  };

  const handleTopEnter = () => {
    console.log('top entered');
    setSectionAnimated(false);
  };



  return (
    <>
      {loading ? (
        <HashLoader className="vh-100 flex justify-center mx-auto" color="#896752" />
      ) : (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ld">
          <Waypoint onEnter={handleTopEnter} />
          <Brand />
          <Element name="section" className="element">
            <Waypoint onEnter={handleSectionEnter} bottomOffset="20%" />
            <Section animated={sectionAnimated} />
          </Element>
          <About />
          <Location />
        </div>
      )}
    </>
  );
}

export default Landing;

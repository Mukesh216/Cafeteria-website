  import React from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  import { images } from "./ItemImages";
  import { useMediaQuery } from "react-responsive";

  function MenuCarousel() {
    const isMedium = useMediaQuery({ minWidth: "768px", maxWidth: "1023px" })
    const isSmall = useMediaQuery({ maxWidth: "767px" });
    const isLarge = useMediaQuery({ minWidth: "1024" })
    // const isXlarge = useMediaQuery({minWidth:"900px"})

    let slidesToslide;
    if (isSmall) {
      slidesToslide = 2;
    }
    else if (isMedium) {
      slidesToslide = 3;
    }
    else if (isLarge) {
      slidesToslide = 4;
    }
    else {
      slidesToslide = 4;
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToslide,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: false,
    
    };

    return (
      <div className="p-3 col-lg-12 col-md-12  d-none d-sm-block  ">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="d-flex justify-content-center" key={image.id}>
              <img src={image.src} alt={image.alt} style={{ width: "99%", height: "450px" }} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  export default MenuCarousel;

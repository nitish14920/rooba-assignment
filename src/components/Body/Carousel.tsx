import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  return (
    <Carousel autoPlay={true} interval={3000} infiniteLoop showThumbs={false}>
      <div>
        <img
          alt="img"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20"
        />
      </div>
      <div>
        <img
          alt="img"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/345037032e3daaaf.jpg?q=20"
        />
      </div>
      <div>
        <img
          alt="img"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b21f8ed98e12a512.jpg?q=20"
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

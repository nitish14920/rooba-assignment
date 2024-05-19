import React from "react";
import { Carousel } from "antd";

const CarouselAutoplay: React.FC = () => (
  <Carousel autoplay effect="scrollx">
    <img className="carosuelImg" alt="img" src="carousel.jpg" />
    <img className="carosuelImg" alt="img" src="carousel.jpg" />
    <img className="carosuelImg" alt="img" src="carousel.jpg" />
    <img className="carosuelImg" alt="img" src="carousel.jpg" />
  </Carousel>
);

export default CarouselAutoplay;

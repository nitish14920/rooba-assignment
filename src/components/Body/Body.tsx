import React from "react";
import ImageCarousel from "./Carousel";
import Categories from "./Categories/Categories";

const Body = () => {
  return (
    <div className="px-8 bg-gray-300 py-4">
      <Categories />
      <ImageCarousel />
    </div>
  );
};

export default Body;

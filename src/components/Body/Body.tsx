import React from "react";
import ImageCarousel from "./Carousel";
import Categories from "./Categories/Categories";
import "./body.css";
import Products from "./ProductsSection/Products";

const Body = () => {
  return (
    <div className="px-8 bg-gray-300 py-4">
      <Categories />
      <ImageCarousel />
      <Products />
    </div>
  );
};

export default Body;

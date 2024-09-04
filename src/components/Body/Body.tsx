import React from "react";
import ImageCarousel from "./Carousel";
import Categories from "./Categories/Categories";
import "./body.css";
import ProductList from "./ProductsSection/ProductList";

const Body = () => {
  return (
    <div className="px-8 bg-gray-300 py-4">
      <Categories />
      <ImageCarousel />
      <ProductList />
    </div>
  );
};

export default Body;

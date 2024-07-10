import axios from "axios";
import React, { useEffect, useState } from "react";

type Review = {
  user_id: number;
  rating: number;
  comment: string;
};

type Product = {
  product_id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  discount: number;
  availability: boolean;
  brand: string;
  category: string;
  rating: number;
  reviews: Review[];
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProductData("https://fake-store-api.mock.beeceptor.com/api/products");
  }, []);

  async function getProductData(url: string) {
    const data = await axios.get(url);
    console.log("data", data.data);
    setProducts(data.data);

    return data;
  }
  return (
    <div className="flex flex-wrap gap-10 p-5">
      {products.map((item: Product, index) => (
        <div className="flex-column ">
          <div>{item.brand}</div>
          <img
            className=""
            src={`https://picsum.photos/id/${index}/200/200`}
            alt=""
          />
          <div>{item.category}</div>
          <div className="flex justify-between">
            <div>{item.price}</div>
            <div>{item.rating}</div>
          </div>
          {/* <div className="overflow-auto">{item.description}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Products;

// src/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number | string;
  title: string;
  price: number;
  thumbnail: string; // Assuming the API provides a thumbnail image
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Accessing the 'products' array from the API response
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            id: product.id,
            name: product.title, // Passes the title as the name
            price: product.price, // Passes the price
            image: product.thumbnail, // Passes the thumbnail as the image
          }}
        />
      ))}
    </div>
  );
};

export default ProductList;

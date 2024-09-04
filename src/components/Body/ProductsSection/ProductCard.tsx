// src/components/ProductCard.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cartSlice";
import { AppDispatch } from "../../../store";

interface Product {
  id: number | string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Adding to cart:", product); // Debugging log
    dispatch(
      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        quantity: 1, // Default quantity to add
      })
    );
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
      <div className="w-full h-48 mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full mx-auto h-auto object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">Price: ${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../features/cartSlice";
import { AppDispatch, RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

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
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [quantity, setQuantity] = useState(1);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        quantity,
      })
    );
    setQuantity(1);
    navigate("/viewCart");
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    setIsProductInCart(cartItems.some((item) => item.id == product.id));
  }, [cartItems, product.id]);

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 relative">
      <div className="w-full h-48 mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full mx-auto h-auto object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {product.name}
      </h3>
      <p className="text-gray-600 mb-4">Price: ${product.price.toFixed(2)}</p>

      <button
        onClick={handleAddToCart}
        className={`${
          isProductInCart ? "bg-red-500" : "bg-blue-500"
        } text-white py-2 px-4 rounded transition-colors duration-200 w-full active:translate-y-1 ${
          isProductInCart ? "hover:bg-red-600" : "hover:bg-blue-600"
        }`}
      >
        {isProductInCart ? "In Cart" : "Add to Cart"}
      </button>

      {isProductInCart && (
        <button
          className="absolute right-8 bottom-6"
          onClick={() => handleRemoveFromCart(product.id.toString())}
        >
          <DeleteOutlined />
        </button>
      )}
    </div>
  );
};

export default ProductCard;

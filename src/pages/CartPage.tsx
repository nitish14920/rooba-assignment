// src/pages/CartPage.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";
import { RootState, AppDispatch } from "../store";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  console.log(cartItems, "cartItems");

  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <p className="text-lg mb-4">Total Items: {totalQuantity}</p>
      <p className="text-lg mb-8">Total Price: ${totalPrice.toFixed(2)}</p>
      <button
        onClick={handleClearCart}
        className="bg-red-500 text-white py-2 px-4 rounded mb-6 hover:bg-red-600 transition-colors duration-200"
      >
        Clear Cart
      </button>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">
                ${item.totalPrice.toFixed(2)} ({item.quantity})
              </p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors duration-200"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;

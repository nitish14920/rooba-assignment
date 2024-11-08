import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";
import { RootState, AppDispatch } from "../store";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Your Cart
      </h2>
      <p className="text-lg mb-4 text-center text-gray-700">
        Total Items: <span className="font-semibold">{totalQuantity}</span>
      </p>
      <p className="text-lg mb-8 text-center text-gray-700">
        Total Price:{" "}
        <span className="font-semibold">${totalPrice.toFixed(2)}</span>
      </p>
      <div className="flex justify-center mb-6">
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md"
        >
          Clear Cart
        </button>
      </div>
      <ul className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
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
          ))
        ) : (
          <li className="text-center text-gray-500">Your cart is empty.</li>
        )}
      </ul>
    </div>
  );
};

export default CartPage;

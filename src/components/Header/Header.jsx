import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around  w-full border-blue-950 border-1 p-4 bg-slate-950 text-white text-xl">
      <div className="border-black border-2">Logo</div>

      <div className="flex gap-10  border-black border-2">
        <input className="w-60" />
        <button className="border-white border-2 px-2 rounded-xl text-sm">
          search
        </button>
      </div>
      <div className="flex w-1/3 justify-between  border-black border-2">
        <span className="border-black border-2 cursor-pointer">Products</span>
        <span className="border-black border-2 cursor-pointer">Wishlist</span>
        <span className="border-black border-2 cursor-pointer">Cart</span>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Use media query to determine if the screen is mobile or tablet
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const handleMenuToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between w-full border-blue-950 border-1 p-4 bg-slate-950 text-white text-xl">
      {/* Logo */}
      <div className="border-black border-2">Logo</div>

      {/* Desktop search bar and buttons */}
      {!isMobileOrTablet && (
        <div className="flex gap-10 border-black border-2">
          <input className="w-60" placeholder="Search..." />
          <button className="border-white border-2 px-2 rounded-xl text-sm">
            Search
          </button>
        </div>
      )}

      {/* Mobile menu button */}
      {isMobileOrTablet && (
        <button
          className="border-white border-2 px-2 rounded-xl text-sm"
          onClick={handleMenuToggle}
        >
          Menu
        </button>
      )}

      {/* Desktop navigation links */}
      {!isMobileOrTablet && (
        <nav className="flex w-1/3 justify-between border-black border-2">
          <a href="#" className="border-black border-2 p-2 cursor-pointer">
            Products
          </a>
          <a href="#" className="border-black border-2 p-2 cursor-pointer">
            Wishlist
          </a>
          <a
            href="/viewCart"
            className="border-black border-2 p-2 cursor-pointer"
          >
            Cart
          </a>
        </nav>
      )}

      {/* Mobile side drawer */}
      {isDrawerOpen && isMobileOrTablet && (
        <div className="fixed inset-0 bg-slate-950 text-white p-4 z-50">
          <button
            className="absolute top-4 right-4 border-white border-2 px-2 rounded-xl text-sm"
            onClick={closeDrawer}
          >
            X
          </button>
          <nav className="flex flex-col gap-4 mt-16">
            <a href="#" className="border-black border-2 p-2 cursor-pointer">
              Products
            </a>
            <a href="#" className="border-black border-2 p-2 cursor-pointer">
              Wishlist
            </a>
            <a
              href="/viewCart"
              className="border-black border-2 p-2 cursor-pointer"
            >
              Cart
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

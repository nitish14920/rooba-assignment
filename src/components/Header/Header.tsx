import axios from "axios";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const handleMenuToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {
          Authorization: localStorage.getItem("accessToken"),
        },
        {
          withCredentials: true, // Ensures cookies are sent with the request
        }
      );

      if (response.status === 200) {
        console.log("Logout successful:", response.data);

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        // Redirect to login page
        navigate("/login");
        alert("Logged out successfully");
      } else {
        console.error("Logout failed:", response.data);
        alert("Failed to log out. Please try again.");
      }
    } catch (error: any) {
      console.error("Network error:", error.response?.data || error.message);
      alert("Network error. Please try again.");
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between w-full border-blue-950 border-1 p-4 bg-slate-950 text-white text-xl">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="border-black border-2 cursor-pointer"
      >
        Logo
      </div>

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
          <Link to="#" className="border-black border-2 p-2 cursor-pointer">
            Products
          </Link>
          <Link to="#" className="border-black border-2 p-2 cursor-pointer">
            Wishlist
          </Link>
          <Link
            to="/viewCart"
            className="border-black border-2 p-2 cursor-pointer"
          >
            Cart
          </Link>
          <button onClick={handleLogout}>Logout</button>
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
            <Link to="#" className="border-black border-2 p-2 cursor-pointer">
              Products
            </Link>
            <Link to="#" className="border-black border-2 p-2 cursor-pointer">
              Wishlist
            </Link>
            <Link
              to="/viewCart"
              className="border-black border-2 p-2 cursor-pointer"
            >
              Cart
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

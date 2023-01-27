import React, { useState } from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header_desktop_nav">
        <div className="header_left">
          <div className="header_brand_div">
            <img
              className="header_brand_logo"
              src="https://res.cloudinary.com/dllshtsed/image/upload/v1670287415/Frame_274_vkglt2.png"
              alt="brand"
            />
            <p className="header_brand_title">
              <i>Tasty Kitchens</i>
            </p>
          </div>
        </div>
        <div className="ham_button_div">
          <button
            className="hamburger_button"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
          >
            <RxHamburgerMenu className="ham" />
          </button>
        </div>
        <nav className="navbar">
          <ul className="nav_list">
            <li>
              <Link className="nav_list_item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_list_item" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <button
                className="logout_button"
                onClick={() => {
                  Cookies.remove("accessToken");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {mobileNav && (
        <div className="mobile_navbar">
          <ul className="mobile_nav_list">
            <li>
              <Link className="mobile_nav_list_item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="mobile_nav_list_item" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <button
                className="mobile_logout_button"
                onClick={() => {
                  Cookies.remove("accessToken");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

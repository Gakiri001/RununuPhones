// Header.jsx
import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/phoneLogo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Note: import jwtDecode without destructuring

function Header() {
  const [cookieValue, setCookieValue] = useState("");
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();
  const { user, logout1 } = useAuth();

  useEffect(() => {
    // Get the cookie when the component mounts
    const value = Cookies.get("rununu_access_token");
    if (value) {
      const DecodedValue = jwtDecode(value);
      setCookieValue(DecodedValue);
      console.log(DecodedValue);
    } else {
      console.log("Empty");
    }
  }, []);

  const logout = () => {
    setUser(null); // Clear user data on logout
    setIsAuthenticated(false);
    navigate("/Signup");
    alert("hello");
  };

  // Check if the current path is "/Admin"
  const isAdminPath = location.pathname.toLowerCase() === "/admin";

  if (isAdminPath) {
    return null; // Do not render the header for Admin path
  }

  return (
    <div className="Header">
      <div className="HeaderLeft">
        <img src={logo} alt="" />
      </div>
      <div className="HeaderRight">
        {cookieValue ? (
          <>
            <ul>
              <li>
                <Link className="HeaderLink" to="/Home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="HeaderLink" to="/Phone">
                  Phones
                </Link>
              </li>
              <li>
                <Link className="HeaderLink" to="/">
                  Accessories
                </Link>
              </li>
              <li>
                <Link className="HeaderLink" to="/Contact">
                  Contacts
                </Link>
              </li>
              <li>
                <Link className="HeaderLink" to="/Cart">
                  <span>
                    <FaShoppingCart />
                  </span>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h1>Hello User, Log in first</h1>
          </>
        )}
      </div>
      <div className="HeaderButtons">
        {cookieValue ? (
          <>
            <span>Welcome, {cookieValue.firstname}</span>
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <>
            <button>
              <Link className="Login" to="/">
                Log In
              </Link>
            </button>
            <button>
              <Link className="Signup" to="/Signup">
                Sign Up
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

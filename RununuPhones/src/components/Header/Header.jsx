// Header.jsx
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/phoneLogo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="Header">
      <div className="HeaderLeft">
        <img src={logo} alt="" />
      </div>
      <div className="HeaderRight">
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
      </div>
      <div className="HeaderButtons">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <>
            <button>
              <Link className="Login" to="/Login">
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

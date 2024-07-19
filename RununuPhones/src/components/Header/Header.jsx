import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/phoneLogo.jpeg";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <img src={logo} alt="" />
      </div>
      <div className="HeaderRight">
        <ul>
          <li>
            <Link className="HeaderLink" to="/">
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
            <Link className="HeaderLink" to="/">
              Contacts
            </Link>
          </li>
          <li>
            <Link className="HeaderLink" to="/">
              <span>
                <FaShoppingCart />
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="HeaderButtons">
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
      </div>
    </div>
  );
}

export default Header;

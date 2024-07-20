import React from "react";
import juliTechLogo from "../../assets/mut_logo.png";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <div className="FooterLeft">
          <img src={juliTechLogo} alt="" />
          <p>@Julius Gakiri Technologies 2024</p>
        </div>
        <div className="FooterRight">
          <h2>Follow us</h2>
          <p>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

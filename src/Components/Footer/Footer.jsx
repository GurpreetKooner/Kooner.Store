import React from "react";
import "./Footer.css";
import instagram_icon from "../Assets/SocialMediaIcons/instagram.png"
import facebook_icon from "../Assets/SocialMediaIcons/facebook.png"
import whatsapp_icon from "../Assets/SocialMediaIcons/whatsapp.png" 

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <a className="logo" href="#">
          Kooner.store
        </a>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

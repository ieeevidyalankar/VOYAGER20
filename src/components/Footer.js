import React from "react";
import "./Footer.css";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          href="https://www.facebook.com/IEEEVIT1/"
          rel="noreferrer"
          target="_blank"
        >
          <Facebook />
        </a>
        <a
          href="https://twitter.com/vidyalankarieee"
          rel="noreferrer"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          href="https://www.instagram.com/ieeevit/"
          rel="noreferrer"
          target="_blank"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/company/ieee-vit/"
          rel="noreferrer"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
      <p> © 2020-21 CopyRight:</p>
      <p>IEEE-VIT Student Branch</p>
      <p> CODE OF CONDUCT</p>
    </div>
  );
};

export default Footer;

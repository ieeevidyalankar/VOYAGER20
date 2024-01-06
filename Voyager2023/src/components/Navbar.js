import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as CloseIcon } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import ieee_logo from "../assets/ieee_logo.webp";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick((prev) => !prev);
  const closeHandler = () => setClick(false);

  const menuItems = [
    {
      title: "Home",
      url: "https://ieee.vit.edu.in/index.html",
      className: "nav-link",
    },
    {
      title: "IRIS",
      url: "https://iris.vit.edu.in/",
      className: "nav-link",
    },
    {
      title: "About",
      url: "https://ieee.vit.edu.in/index.html#content4-36",
      className: "nav-link",
    },
    {
      title: "Team",
      url: "https://ieee.vit.edu.in/index.html#features16-1g",
      className: "nav-link",
    },
    {
      title: "Blog",
      url: "https://ieee.vit.edu.in/ieeevitblog/",
      className: "nav-link",
    },
  ];

  return (
    <nav className="navbar">
      <img src={ieee_logo} alt="IEEE-VIT" className="nav_logo" />
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
      <ul className={click ? "nav_items active" : "nav_items"}>
        {menuItems.map((items, index) => {
          return (
            <li key={index}>
              <a
                onClick={closeHandler}
                className={items.className}
                href={items.url}
              >
                {items.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

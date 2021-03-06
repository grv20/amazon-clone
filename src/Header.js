import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        {/* Logo */}
      </div>

      <div className="header_nav"></div>
    </div>
  );
}

export default Header;

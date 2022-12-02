import React from "react";
import "./Header.scss";
import searchIcon from "../../assets/magnifying-glass-solid.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <input type="button" className="header__back" value="<"></input>
        <input type="button" value=">" className="header__forward"></input>
        <img className="search-icon" src={searchIcon} />
        <input
          type="text"
          placeholder="Search games and add-ons"
          className="header__search"
        ></input>
      </div>

      <input
        type="button"
        className="header__join-button"
        value="JOIN EA PLAY"
      ></input>
    </div>
  );
}

export default Header;

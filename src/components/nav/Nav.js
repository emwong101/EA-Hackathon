import React from "react";
import "./Nav.scss";
import homeIcon from "../../assets/home.svg";
import BrowserIcon from "../../assets/browser.svg";
import CollectionIcon from "../../assets/collection.svg";
import DMIcon from "../../assets/dm.svg";

export const Nav = () => {
  return (
    <nav className="nav-box">
      <div className="nav-top">
        <div className="nav-item">
          <img className="nav-img" src={homeIcon} alt="home icon" />

          <span className="nav-text">Home</span>
        </div>
        <div className="nav-item">
          <img className="nav-img" src={BrowserIcon} alt="home icon" />
          <span className="nav-text">Browser</span>
        </div>
        <div className="nav-item">
          <img className="nav-img" src={CollectionIcon} alt="home icon" />
          <span className="nav-text">My Collection</span>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-item">
          <img className="nav-img" src={DMIcon} alt="home icon" />
          <span className="nav-text">Download manager</span>
        </div>
      </div>
    </nav>
  );
};

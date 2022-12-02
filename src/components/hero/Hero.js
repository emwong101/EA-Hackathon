import React from "react";
import "./Hero.scss";
import apex from "../../assets/apex-legends.png";
import fifa from "../../assets/fifa.png";
import sims from "../../assets/sims.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__text-box">
          <h1 className="hero__title">EA Play Trial</h1>
          <p className="hero__subtitle">Play NF8 Early</p>
          <p className="hero__text">
            Members can try Need for Speed Unbound for 10 full hours
          </p>
        </div>
        <input className="hero__button" type="button" value="Join"></input>
      </div>
      <div className="hero__list">
        <div className="list__item">
          <img className="list__image" src={apex} />
          <p className="list__subheading">A new season begins</p>
          <p className="list__text">
            Conjure your inner strength in Apex Legends: Eclipse
          </p>
        </div>
        <div className="list__item">
          <img className="list__image" src={fifa} />
          <p className="list__subheading">Earn 2 History Makers</p>
          <p className="list__text">
            Play FIFA Ultimate Team by Jan 3 to collect your reward
          </p>
        </div>
        <div className="list__item">
          <img className="list__image" src={sims} />
          <p className="list__subheading">Take up to 80% off</p>
          <p className="list__text">
            Save big during the Black Friday Sale, now through Dec 7
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;

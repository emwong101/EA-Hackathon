import Hero from "../../components/hero/Hero.js";
import { Home } from "./Home.js";
import Header from "../../components/header/Header.js";
import "./main.scss";

import React from "react";

function main() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default main;

import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "../css/Home.css";
import HomeCSS from "../css/Home.module.css";
import StockIndex from "./StockIndex";
import StockSector from "./StockSector";
import stockImage from "../photos/stock.jpg";

var axios = require("axios").default;

const Home = () => {
  return (
    <div>
      <div>
        <img src={stockImage} className="stockImage"></img>
          <h1 id="mantra">
            Keep it Simple and Intrin<b>$</b>ify.
          </h1>
      </div>
      <div className="charts">
        <StockIndex />
        <StockSector />
      </div>
    </div>
  );
};

export default Home;

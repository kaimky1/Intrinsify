import React from "react";
import "../css/Home.css";
import StockIndex from "./StockIndex";
import StockSector from "./StockSector";
import stockImage from "../photos/stock.jpg";

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

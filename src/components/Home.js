import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import HomeCSS from "../css/Home.module.css";
import StockIndex from "./StockIndex";
var axios = require("axios").default;

const Home = () => {
 

 
    
  return (
    <div>
        <div>
            <h1>
            Keep it Simple and Intrin<b>$</b>ify
            </h1>
        </div>
        <div>
            <StockIndex />
        </div>
    </div>
  )
};

export default Home;

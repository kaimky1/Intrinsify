import React, { useState, useEffect } from "react";
import "../css/TopGainersLosers.css";
var axios = require("axios").default;

const TopGainersLosers = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  let gainersResults = post.map((element, index) => {
    return (
      <div className="gainers">
        <div className="gainerInfo">
          <p>{element.symbol}</p>
        </div>
        <div className="gainerInfo">
          <p>{element.name} </p>
        </div>
        <div className="gainerInfo" id="gainerChange">
          <p>+${element.change}</p>
        </div>
        <div className="gainerInfo" id="gainerPrice">
          <p>${element.price}</p>
        </div>
        <div className="gainerInfo" id="gainerPercentage">
          <p>{element.changesPercentage}%</p>
        </div>
      </div>
    );
  });
  return (
    <div className="gains">
      <div className="topGainer">
        <div>{gainersResults}</div>
      </div>
    </div>
  );
};

export default TopGainersLosers;

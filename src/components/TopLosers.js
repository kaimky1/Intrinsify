import React, { useState, useEffect } from "react";
import "../css/TopLosers.css";
import { Link } from "react-router-dom";
var axios = require("axios").default;

const TopLosers = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Creating the Top Losers Table here.
  let losersResults = post.map((element, index) => {
    return (
      <div className="losers" key={index}>
        <div className="losersInfo" id="losersSymbol">
          <p>{element.symbol}</p>
        </div>
        <Link to={`/search/${element.symbol}`}>
          <div className="losersInfo" id="losersName">
            <p>{element.name} </p>
          </div>
        </Link>
        <div className="losersInfo" id="losersChange">
          <p>${element.change}</p>
        </div>
        <div className="losersInfo" id="losersPrice">
          <p>${element.price}</p>
        </div>
        <div className="losersInfo" id="losersPercentage">
          <p>{element.changesPercentage}%</p>
        </div>
      </div>
    );
  });
  return (
    <div className="losers">
      <div className="topLosers">
        <div>{losersResults}</div>
      </div>
    </div>
  );
};

export default TopLosers;

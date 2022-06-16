import React, { useState, useEffect } from "react";
import '../TopGainersLosers.css'
var axios = require("axios").default;

const TopGainersLosers = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=41d7c9dfc25f0d3ce3bd486781f50c45"
      )
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  let gainersResults = post.slice(0,5).map((element, index) => {
    return (
      <div className="gainers">
        <div className="gainerInfo">
          <p>{element.symbol}</p>
        </div>
        <div className="gainerInfo">
          <p>{element.name} </p>
        </div>
        <div className="gainerInfo">
          <p>{element.change}%</p>
        </div>
        <div className="gainerInfo">
          <p>${element.price}</p>
        </div>
        <div className="gainerInfo">
          <p>{element.changesPercentage}%</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>{gainersResults}</div>
    </div>
  );
};

export default TopGainersLosers;

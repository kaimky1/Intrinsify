import React, { useState, useEffect } from "react";

var axios = require("axios").default;

const Display = (props) => {
  const { elementName, elementSymbol } = props;
  const [post, setPost] = useState({});

  var options = {
    method: "GET",
    url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${elementSymbol}%2CBTC-USD%2CEURUSD%3DX`,
    params: { modules: "defaultKeyStatistics,assetProfile" },
    headers: {
      "x-api-key": "QzOXYvGuwW5XkpCBYumzt8ReryTGzlxF2UYclLDV",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.quoteResponse.result[0]);
        setPost(response.data.quoteResponse.result[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>{post.displayName}</h1>
      <h2>{`$` + post.ask}</h2>
      <h2>Average P/E Ratio Current Year: {`$${post.priceEpsCurrentYear}`}</h2>
      <p>
        What is P/E ratio? The Price/Earnings ratio is used to determine how
        much investors are willing to pay for a stock relative to the company's
        earnings. The P/E ratio is calculated by taking the current price of a
        stock and dividing their earnings per share (EPS). This essentially
        determines the bargain you can get for each stock. In most cases, the
        lower the P/E ratio, the better.{" "}
      </p>
      <h2>Earnings Per Share Current Year: {`$` + post.epsCurrentYear}</h2>
      <p>
        Earnings per share is how much the company earned during the quarter for
        1 share of stock. As a general rule of thumb, the higher the EPS the
        better it is! The EPS essentially shows how much the company earned with
        one share of that stock.{" "}
      </p>
      <h3>
        Determining Industry Average Price:{" "}
        {`$` + post.priceEpsCurrentYear * post.epsCurrentYear}
      </h3>
      <p>
        According to finance.zacks.com, "Multiply the industry average P/E ratio
        by the stock's EPS to estimate the price at which the stock would trade
        if its P/E ratio equaled the industry average. In general, companies in
        the same industry tend to trade at similar P/E ratios. If a stock's P/E
        ratio is far off from the industry average, it might eventually - but
        not necessarily - realign with the industry average."
      </p>
      <button>Add To Watchlist</button>
    </div>
  );
};

export default Display;

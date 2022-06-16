import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import '../css/Display.css'


var axios = require("axios").default;

const Display = () => {
 const {elementSymbol} = useParams()
  const [post, setPost] = useState([]);
  const [data, setData] = useState([]);
  const[stockPrice, setStockPrice] = useState([])
  const[aboutStock, setAboutStock] = useState([])
  const[stockFinancials, setStockFinancials] = useState([])

//API Calls

  //Getting the P/E ratio
  useEffect(() => {
      axios
        .get(`https://financialmodelingprep.com/api/v3/ratios-ttm/${elementSymbol}?apikey=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
          console.log("responsedata", response.data[0])
          setPost(response.data[0]);
        })
        .catch(function (error) {
          console.error(error);
        });
  }, []);

  //Getting the stock price
  useEffect(() => {
    axios
      .get(`https://financialmodelingprep.com/api/v3/quote/${elementSymbol}?apikey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        console.log("responsedata", response.data[0])
        setStockPrice(response.data[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
}, []);

//Getting the company description
useEffect(() => {
  axios
    .get(`https://financialmodelingprep.com/api/v3/profile/${elementSymbol}?apikey=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      console.log("responsedata", response.data[0])
      setAboutStock(response.data[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
}, []);

//Getting the EPS from this endpoint
useEffect(() => {
  axios
    .get(`https://financialmodelingprep.com/api/v3/income-statement/${elementSymbol}?limit=120&apikey=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      console.log("responsedata", response.data[0])
      setStockFinancials(response.data[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
}, []);





  
  return (
    <div className="dataInfo">
      <h2 id="stockName">{stockPrice.name}</h2>
      <h3 id="stockPrice">Stock Price:{` $` + stockPrice.price}</h3>
      <p>{aboutStock.description}</p>
      <h5>
        Average P/E Ratio Current Year:{" "}
        ${post.peRatioTTM}
      </h5>
      <p>
        What is P/E ratio? The Price/Earnings ratio is used to determine how
        much investors are willing to pay for a stock relative to the company's
        earnings. The P/E ratio is calculated by taking the current price of a
        stock and dividing their earnings per share (EPS). This essentially
        determines the bargain you can get for each stock. In most cases, the
        lower the P/E ratio, the better.{" "}
      </p>
      <h5>
        Earnings Per Share Current Year:{" "}
        ${stockFinancials.eps}
      </h5>
      <p>
        Earnings per share is how much the company earned during the quarter for
        1 share of stock. As a general rule of thumb, the higher the EPS the
        better it is! The EPS essentially shows how much the company earned with
        one share of that stock.{" "}
      </p>
      <h5>
        Determining Industry Average Price:{" "}
        {`$` + post.peRatioTTM * stockFinancials.eps}
      </h5>
      <p>
        According to finance.zacks.com, "Multiply the industry average P/E ratio
        by the stock's EPS to estimate the price at which the stock would trade
        if its P/E ratio equaled the industry average. In general, companies in
        the same industry tend to trade at similar P/E ratios. If a stock's P/E
        ratio is far off from the industry average, it might eventually - but
        not necessarily - realign with the industry average."
      </p>
      <h5>
        Average Analyst Rating:{" "}
        {data.averageAnalystRating ||
          post.averageAnalystRating}
      </h5>
      <h5>52 Week Range: { data.fiftyTwoWeekRange  || post.fiftyTwoWeekRange}</h5>
      <button id="watchlist">Add To Watchlist</button>
    </div>
  );
};

export default Display;

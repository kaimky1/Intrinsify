import { render } from "@testing-library/react";
import React, { useEffect, useState, prevState } from "react";
import '../css/Watchlist.css'

var axios = require("axios").default;
let userID = Number(window.localStorage.getItem("userID"));

const Watchlist = () => {
  const [post, setPost] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4004/getFavorite`, {
        params: {
          userID: userID,
        },
      })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(post, "post");
  const param = post.map((element) => element.stock_ticker);

  console.log(param.join());
  const stocks = post.map((element, index) => {
    return <h6 key={index}>{element.stock_ticker}</h6>;
  });



  useEffect(() => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/quote/${param.join()}?apikey=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then((res) => {
        
        setStock(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [post]);

 

  let view = stock.map((element, index) => {
    return (
      <div key={index}>
        <div className="stockInfo">
          <p>{element.name}</p>
          <p>${element.price}</p>
        <button type="button" className="btn btn-success btn-small">Get More Details</button>
        <button type="button" className="btn btn-danger btn-small">Delete</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Watchlist</h1>
      <input type="tel"></input>
      <small>Format: +1123-456-7890</small>
      <button>Send Me Text Updates</button>
      <div>{view}</div>
    </div>
  );
};

export default Watchlist;

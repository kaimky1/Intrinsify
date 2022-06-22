import React, { useEffect, useState, prevState } from "react";
import "../css/Watchlist.css";
import StockCard from "./StockCard";

var axios = require("axios").default;
let userID = Number(window.localStorage.getItem("userID"));

const Watchlist = () => {
  const [post, setPost] = useState([]);
  const [stock, setStock] = useState([]);
  const [number, setNumber] = useState("");

  //API requests. One to backend and one to retrieve all the stocks in the watchlist.
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


  const param = post.map((element) => element.stock_ticker);


//This logic here is to get an API call for each stock ticker in an array.
  // const stocks = post.map((element, index) => {
  //   return <StockCard element={element} />;
  // });

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
          <button type="button" className="btn btn-success btn-small">
            Get More Details
          </button>
          <button type="button" className="btn btn-danger btn-small">
            Delete
          </button>
        </div>
      </div>
    );
  });

  // The code block below will create the body object and send text to the desired phone number.
  const body = (stock) => {
    let text = "";
    for (let i = 0; i < stock.length; i++) {
      text += `Stock Name: ${stock[i].name} Stock Price: ${stock[i].price} `;
    }
    return text;
  };
  let bodyObj = {
    body: body(stock),
    from: `+19807377433`,
    to: `${number}`,
  };
  const textClickHandler = () => {
    axios
      .post(`http://localhost:4004/`, bodyObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Watchlist</h1>
      <input type="tel" onChange={(e) => setNumber(e.target.value)}></input>
      <small>Format: +1123-456-7890</small>
      <button onClick={textClickHandler}>Send Me Text Updates</button>
      <div>{view}</div>
      {stocks}
    </div>
  );
};

export default Watchlist;

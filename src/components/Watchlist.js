import React, { useEffect, useState, prevState } from "react";
import "../css/Watchlist.css";
import StockCard from "./StockCard";
import { Link } from "react-router-dom";
import swal from "sweetalert";

var axios = require("axios").default;
let userID = Number(window.localStorage.getItem("userID"));

const Watchlist = () => {
  const [post, setPost] = useState([]);
  const [stock, setStock] = useState([]);
  const [number, setNumber] = useState("");

  //Delete Function Request
  const deleteHandler = (name) => {
    axios
      .delete(`http://localhost:4004/getFavorite/${name}`)
      .then((res) => {
        swal("Deleted!", `${name} has been deleted`, "success");
        rerender();
      })
      .catch((err) => {
        swal("Error", err, "error");
      });
  };

  const rerender = () =>
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

  console.log(stock);
  let view = stock.map((element, index) => {
    return (
      <div key={index}>
        <div className="stockInfo">
          <h5 className="stockInfo1">{element.symbol + " "}</h5>
          <h6 className="stockInfo1">{element.name + " "}</h6>
          <p className="stockInfo1">${element.price + " "}</p>
          <p className="stockInfo1">{element.changesPercentage}%</p>
          <Link to={`/search/${element.symbol}`}>
            <button
              type="button"
              className="btn btn-success btn-sm"
              id="getMore"
            >
              Get More Details
            </button>
          </Link>
          <button
            onClick={() => deleteHandler(element.symbol)}
            type="button"
            className="btn btn-danger btn-sm"
            id="delete"
          >
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
  const handleChange = (e) => {
    if (e.target.checked) {
        axios
          .post(`http://localhost:4004/`, bodyObj)
          .then((res) => {
            swal(
              "Confirmed!",
              `Stock updates will be sent every 24 hours`,
              "success"
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  

  const STYLE = {
    padding: "15px",
  };
  return (
    <div className="watchlist">
      <h1>Watchlist</h1>

      <input type="tel" onChange={(e) => setNumber(e.target.value)}></input>
      <small id="telphone" style={STYLE}>
        Format: +1123-456-7890
      </small>

      <label for="texts">
        <input type="checkbox" onChange={handleChange}></input>Recieve 24 Hour
        Text Updates
      </label>
      <div className="stockDisplay">{view}</div>
      {/* {stocks} */}
    </div>
  );
};

export default Watchlist;

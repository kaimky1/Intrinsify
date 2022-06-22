import { render } from "@testing-library/react";
import React, { useEffect, useState, prevState } from "react";

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


    const stocks = post.map((element, index) => {
        return(
          <h6 key={index}>{element.stock_ticker}</h6>
        )
    }
    );

    const getPrice = async() => {
      let prices = await Promise.all(
        post.map(async(element, index) => {
          await axios.get(`https://financialmodelingprep.com/api/v3/quote/${element.stock_ticker}?apikey=${process.env.REACT_APP_API_KEY}`)
          .then(res => console.log(res.data))
        })
      )
    }
    // let prices = post.map(async (element, index) => { await
    //     axios.get(`https://financialmodelingprep.com/api/v3/quote/${element.stock_ticker}?apikey=${process.env.REACT_APP_API_KEY}`)
    //     .then(res => {
    //       console.log(res.data)
    //     }) 
    //     render(
    //       <h1></h1>
    //     )
    //   })
   


  return (
    <div>
      <h1>Watchlist</h1>
      <div>
        {stocks}
        {getPrice}
      </div>
    </div>
  );
};

export default Watchlist;

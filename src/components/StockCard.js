import React, { useEffect, useState } from 'react'
import axios from 'axios'
const StockCard = ({element}) => {
    const [stock, setStock] = useState({})

    //If you wanted to make an individual call for each item in an array this is how you would do it.
    useEffect(() => {
        axios
        .get(
          `https://financialmodelingprep.com/api/v3/quote/${element.stock_ticker}?apikey=${
            process.env.REACT_APP_API_KEY
          }`
        )
        .then((res) => {
          setStock(res.data[0]);
        })
        .catch(function (error) {
          console.error(error);
        });      
    }, [])
  return (
    <div>
        <h6>{element.stock_ticker}</h6>
        <h6>{stock.price}</h6>
    </div>
  )
}

export default StockCard
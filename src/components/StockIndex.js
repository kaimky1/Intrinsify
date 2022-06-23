import React, {useState, useEffect} from 'react'
import HomeCSS from "../css/Home.module.css";

var axios = require("axios").default;


const StockIndex = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
      axios
        .get(
          `https://financialmodelingprep.com/api/v3/quote/%5EGSPC,%5EDJI,%5EIXIC?apikey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          console.log(response.data);
          setPost(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, []);
  
    let stocks = post.map((element, index) => {
      return (
        <div key={index}>
          <div className={HomeCSS.row}>
            <div className={HomeCSS.cell} data-title={HomeCSS.Name}>
              {element.name}
            </div>
            <div className={HomeCSS.cell} data-title={HomeCSS.Age}>
              ${element.price}
            </div>
            <div className={HomeCSS.cell} data-title={HomeCSS.Occupation}>
              {element.changesPercentage}%
            </div>
            <div className={HomeCSS.cell} data-title={HomeCSS.Location}>
              ${element.change}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
          <h1 className={HomeCSS.header}>Stock Market Index</h1>
        <div className={HomeCSS.wrapper}>
          <div className={HomeCSS.table}>
            <div className={`${HomeCSS.row} ${HomeCSS.header}`}>
              <div className={HomeCSS.cell}>Name</div>
              <div className={HomeCSS.cell}>Price</div>
              <div className={HomeCSS.cell}>Percent Change</div>
              <div className={HomeCSS.cell}>Change</div>
            </div> 
            </div>
              {stocks}
          </div>
        </div>
    )
}

export default StockIndex
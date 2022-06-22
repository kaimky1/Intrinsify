import React, { useState, useEffect } from "react";
import HomeCSS from "../css/Home.module.css";
var axios = require("axios").default;

const StockSector = () => {
  const [post, setPost] = useState([]);
  var date = new Date().toISOString().split("T")[0];
  useEffect(() => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v4/sector_price_earning_ratio?date=${date}&exchange=NYSE&apikey=${process.env.REACT_APP_API_KEY}
        `
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
      <div>
        <div className={HomeCSS.row}>
          <div className={HomeCSS.cell} data-title={HomeCSS.Name}>
            {element.date}
          </div>
          <div className={HomeCSS.cell} data-title={HomeCSS.Age}>
            {element.sector}
          </div>
          <div className={HomeCSS.cell} data-title={HomeCSS.Occupation}>
            {element.pe}
          </div>
          <div className={HomeCSS.cell} data-title={HomeCSS.Location}>
            {element.exchange}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h1 className={HomeCSS.header}>Stock Market Sectors</h1>
        <div className={HomeCSS.wrapper}>
          <div className={HomeCSS.table}>
            <div className={`${HomeCSS.row} ${HomeCSS.header}`}>
              <div className={HomeCSS.cell}>Date</div>
              <div className={HomeCSS.cell}>Sector</div>
              <div className={HomeCSS.cell}>P/E Ratio</div>
              <div className={HomeCSS.cell}>Exchange</div>
            </div>
          </div>
          <div className={HomeCSS.stockSectorTable}>{stocks}</div>
        </div>
      </div>
    </div>
  );
};

export default StockSector;

import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import HomeCSS from "../css/Home.module.css";
var axios = require("axios").default;

const Home = () => {
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

  //   if(post.length > 0){

  //       let stocks = () => {
  //         return(
  //             <div>
  //             <h1 className={HomeCSS.header}>Stock Market Index</h1>
  //           <div className={HomeCSS.wrapper}>
  //             <div className={HomeCSS.table}>
  //               <div className={`${HomeCSS.row} ${HomeCSS.header}`}>
  //                 <div className={HomeCSS.cell}>Name</div>
  //                 <div className={HomeCSS.cell}>Price</div>
  //                 <div className={HomeCSS.cell}>Percent Change</div>
  //                 <div className={HomeCSS.cell}>Change</div>
  //               </div>

  //               <div className={HomeCSS.row}>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Name}>
  //                   {post[0].name}
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Age}>
  //                   ${post[0].price}
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Occupation}>
  //                   {post[0].changesPercentage}%
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Location}>
  //                   ${post[0].change}
  //                 </div>
  //               </div>

  //               <div className={HomeCSS.row}>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Name}>
  //                   {post[1].name}
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Age}>
  //                 ${post[1].price}
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Occupation}>
  //                 {post[1].changesPercentage}%
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Location}>
  //                 ${post[1].change}
  //                 </div>
  //               </div>

  //               <div className={HomeCSS.row}>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Name}>
  //                   {post[2].name}
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Age}>
  //                 ${post[2].price}
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Occupation}>
  //                 {post[2].changesPercentage}%
  //                 </div>
  //                 <div className={HomeCSS.cell} data-title={HomeCSS.Location}>
  //                 ${post[2].change}
  //                 </div>
  //               </div>
  //               </div>
  //             </div>
  //             </div>
  //         )
  //       }
  //   }

  let stocks = post.map((element, index) => {
    return (
      <div>
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
  console.log(stocks, "stocks")
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
};

export default Home;

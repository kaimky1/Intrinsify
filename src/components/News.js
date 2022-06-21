import React, { useState, useEffect } from "react";

var axios = require("axios").default;

const News = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let newsResults = post.map((element, index) => {
    return (
      <div className="col">
        <div className="card h-100">
          <img src={element.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.text}</p>
            <a href={element.url} class="btn btn-primary">
              Link
            </a>
          </div>
          <div class="card-footer">
        <small class="text-muted">{element.publishedDate}</small>
      </div>
        </div>
      </div>
    );
  });

  return (
    <div>
        <h1>Stock News</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">            
        {newsResults}
      </div>
    </div>
  );
};

export default News;

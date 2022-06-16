import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import '../css/Search.css'

var axios = require("axios").default;

const Search = () => {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    var options = {
      method: "GET",
      url: `https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&query=${input}`,
      params: { modules: "defaultKeyStatistics,assetProfile" },
      headers: {
        "x-api-key": "QzOXYvGuwW5XkpCBYumzt8ReryTGzlxF2UYclLDV",
      },
    };
    if (data.length === 0) {
      axios
        .request(options)
        .then((response) => {
          localStorage.setItem(
            "data", JSON.stringify(response.data.ResultSet.Result)
          );
          console.log(localStorage.getItem("data"));
          setData(response.data.ResultSet.Result)
          setPost(response.data.ResultSet.Result);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    setActive(!active);
  };
 
  //limit API Calls so I created a fake dataset here.
  let dataResults = data.map((element, index) => {
    return (
      <div>
        <SearchResults
          elementName={element.name}
          elementSymbol={element.symbol}
          key={index}
        />
      </div>
    );
  });
    
  

  let searchResults = post.map((element, index) => {
    return (
      <div>
        <SearchResults
          elementName={element.name}
          elementSymbol={element.symbol}
          key={index}
        />
      </div>
    );
  });

  return (
    <div className="search">
      <input className="stockInput" placeholder="Search for a stock" onChange={changeHandler}></input>
      <button type="button" onClick={clickHandler} className="btn btn-success">Search</button>
      {(active && dataResults) || (active && searchResults)}
    </div>
  );
};

export default Search;

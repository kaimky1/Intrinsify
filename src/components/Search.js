import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

var axios = require("axios").default;

const Search = () => {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);
  const [active, setActive] = useState("");

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
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.ResultSet.Result);
        setPost(response.data.ResultSet.Result);
      })
      .catch(function (error) {
        console.error(error);
      });

    setActive("showMe");
  };

  let searchResults = post.map((element, index) => {
    return (
      <div>
        <SearchResults elementName={element.name} elementSymbol={element.symbol}/>
      </div>
    );
  });

  return (
    <div>
      <input placeholder="Search for a stock" onChange={changeHandler}></input>
      <button onClick={clickHandler}>Search</button>
      {active === "showMe" && searchResults}
    </div>
  );
};

export default Search;

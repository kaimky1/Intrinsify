import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import "../css/Search.css";
import { SupportingDocumentList } from "twilio/lib/rest/trusthub/v1/supportingDocument";

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
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/search?query=${input}&limit=10&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  let searchResults = post.map((element, index) => {
    return (
      <div>
        <SearchResults
          key={index}
          elementName={element.name}
          elementSymbol={element.symbol}
        />
      </div>
    );
  });
  console.log(post)

  let bodyObj = {
    body: JSON.stringify(post),
       from: '+19807377433',
       to: '+18089711951'
  }
  const textClickHandler = () => {
    axios.post(`http://localhost:4004/`, bodyObj)
    .then( res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="search">
      <input
        className="stockInput"
        placeholder="Search for a stock"
        onChange={changeHandler}
      ></input>
      <button type="button" onClick={clickHandler} className="btn btn-success">
        Search
      </button>
      <button onClick={textClickHandler}>Send Me a Text</button>
      {searchResults}
    </div>
  );
};

export default Search;

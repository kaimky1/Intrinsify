import React, { useState } from "react";
import Display from "./Display";
import { Link } from "react-router-dom";
import "../css/SearchResult.css";

const SearchResults = (props) => {
  const [showMe, setShowMe] = useState(false);

  const clickHandler = () => {
    setShowMe(!showMe);
    
  };

  
  const { elementName, elementSymbol } = props;
  return (
    <div>
      <div className="card" style={{ width: "50rem" }}>
        <h5 className="card-title">Company Name: {elementName}</h5>
        <h6 className="card-subtitle">Ticker Symbol: {elementSymbol}</h6>
        <Link to={`${elementSymbol}`}>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => clickHandler()}
          >
            Click for more details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchResults;

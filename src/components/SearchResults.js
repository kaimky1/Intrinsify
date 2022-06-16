import React, { useState } from "react";
import Display from "./Display";
import { Link } from "react-router-dom";
import '../css/SearchResult.css'

const SearchResults = (props) => {
  const [showMe, setShowMe] = useState(false);

  const clickHandler = () => {
    setShowMe(!showMe);
  };
  const { elementName, elementSymbol } = props;
  return (
    <div>
      <div className="card" style={{"width": "50rem"}}>
      <h5 class="card-title">
        Company Name: {elementName}
      </h5>
      <h6 class="card-subtitle">
        Ticker Symbol: {elementSymbol}
      </h6>
      <Link to="/stocks">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={clickHandler}
        >
          Click for more details
        </button>
      </Link>
      </div>
      <div>
        {showMe && (
          <Display elementName={elementName} elementSymbol={elementSymbol} />
        )}
      </div>
    </div>
  );
};

export default SearchResults;

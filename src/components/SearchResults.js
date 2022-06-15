import React, { useState } from "react";
import Display from "./Display";
import {Link} from 'react-router-dom'

const SearchResults = (props) => {
  const [showMe, setShowMe] = useState(false);

  const clickHandler = () => {
    setShowMe(!showMe);
  };
  const { elementName, elementSymbol } = props;
  return (
    <div>
      <h3>
        Company Name: {elementName}, Ticker Symbol: {elementSymbol}
      </h3>
      <Link to="/stocks">
        <button onClick={clickHandler}>Click for more details</button>
      </Link>
      <div>
        {showMe && (
          <Display elementName={elementName} elementSymbol={elementSymbol} />
        )}
      </div>
    </div>
  );
};

export default SearchResults;

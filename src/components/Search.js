import React, {useState, useEffect} from 'react'

var axios = require("axios").default;



const Search = () => {

const [input, setInput] = useState("")
const[post, setPost] = useState("")
const [active, setActive] = useState("")

var options = {
    method: 'GET',
    url: `https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&query=${input}`,
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
      'x-api-key': 'QzOXYvGuwW5XkpCBYumzt8ReryTGzlxF2UYclLDV'
    }
  };
useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.ResultSet.Result);
        setPost(response.data.ResultSet.Result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);


const changeHandler = (e) => {
    setInput(e.target.value)
}

const clickHandler = (e) => {
    setActive("showMe")
}
  return (
    <div>
        <input placeholder="Search for a stock" onChange={changeHandler}></input>
        <button onClick={clickHandler}>Search</button>
        {/* {active === "showMe" && searchResults} */}
    </div>
  )
}

export default Search
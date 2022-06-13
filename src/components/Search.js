import React, {useState, useEffect} from 'react'

const Search = () => {

  const [input, setInput] = useState("")

const changeHandler = (e) => {
    setInput(e.target.value)
}

const clickHandler = (e) => {
    
}
  return (
    <div>
        <input placeholder="Search for a stock" onChange={changeHandler}></input>
        <button onClick={clickHandler}>Search</button>
    </div>
  )
}

export default Search
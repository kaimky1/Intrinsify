import React, {useState} from 'react'
import Display from './Display'



const SearchResults = (props) => {
    const [showMe, setShowMe] = useState("")
    
    const clickHandler = () => {
        setShowMe(true)
    }
    const {elementName, elementSymbol} = props;
  return (
    <div>
        <h3>
          Company Name: {elementName}, Ticker Symbol: {elementSymbol}
        </h3>
        <button onClick={clickHandler}>Click for more details</button>
        {showMe == true && <Display elementName={elementName} elementSymbol={elementSymbol}/>}
    </div>
  )
}

export default SearchResults
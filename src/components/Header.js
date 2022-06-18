import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>Headers
      <Link to="/register">
        <button>register</button>
      </Link>
    </div>
  )
}

export default Header
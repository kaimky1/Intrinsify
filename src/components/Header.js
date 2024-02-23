import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../photos/Intrinsify-preview.png";
import "../css/Header.css";
import { UsernameContext } from "../App";

const Header = () => {
  
  const {username, setUsername} = useContext(UsernameContext)


  
  const logoutHandler = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('userID')
    setUsername(false)
    setShowMe(false)
  }


  const [showMe, setShowMe] = useState(false);

  const auth = () => {
    if (username === true) {
      setShowMe(true);
    }
  };
  
  const authButton = () => {
    if (username === false) {
      return (
        <div className="login-sign">
          <div className="navbar-nav ml-auto action-buttons">
            <Link to="/login">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link dropdown-toggle mr-4"
                  
                >
                  Login
                </a>
              </div>
            </Link>
            <Link to="/register">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="btn btn-primary dropdown-toggle sign-up-btn"
                >
                  Sign up
                </a>
              </div>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="login-sign">
            <div className="navbar-nav ml-auto action-buttons">
              <Link to="/home" >
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="btn btn-primary dropdown-toggle sign-up-btn"
                    onClick={logoutHandler}
                  >
                    Logout
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Intrin<b>$</b>ify
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarCollapse"
          className="collapse navbar-collapse justify-content-start"
        >
          <div className="navbar-nav">
            <Link to="/home">
              <a href="#" className="nav-item nav-link">
                Home
              </a>
            </Link>

            <Link to="/search">
              <a href="#" className="nav-item nav-link">
                Search
              </a>
            </Link>
            <Link to="/news">
              <a href="#" className="nav-item nav-link active">
                News
              </a>
            </Link>
            {useEffect(() => {auth()}
            , [username])}
            {showMe && (
              <Link to="/watchlist">
                {" "}
                <a href="#" className="nav-item nav-link active">
                  Watchlist
                </a>{" "}
              </Link>
            )}
          </div>

          <form inline>{authButton()}</form>
          {/* <div className="login-sign">
            <div class="navbar-nav ml-auto action-buttons">
              <Link to="/login">
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    class="nav-link dropdown-toggle mr-4"
                  >
                    Login
                  </a>
                </div>
              </Link>
              <Link to="/register">
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    class="btn btn-primary dropdown-toggle sign-up-btn"
                  >
                    Sign up
                  </a>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../photos/Intrinsify-preview.png";
import "../css/Header.css";

const Header = () => {
  const [currentUser, setCurrentUser ] = useState(false);
  let username = localStorage.getItem("username");

  
// useEffect(() => {
//     if(username.length > 0){
//       setCurrentUser(true)
//     }
//   }, [currentUser])
  
  const logoutHandler = () => {
    localStorage.removeItem('username')
    setCurrentUser(false)
  }
  const [showMe, setShowMe] = useState(false);
  const auth = () => {
    if (currentUser === true) {
      setShowMe(!showMe);
    }
  };

  
  const authButton = () => {
    if (currentUser === false) {
      return (
        <div className="login-sign">
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
        </div>
      );
    } else {
      return (
        <div>
          <div className="login-sign">
            <div class="navbar-nav ml-auto action-buttons">
              <Link to="/home" >
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    class="btn btn-primary dropdown-toggle sign-up-btn"
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" class="navbar-brand">
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
          class="collapse navbar-collapse justify-content-start"
        >
          <div class="navbar-nav">
            <Link to="/home">
              <a href="#" className="nav-item nav-link">
                Home
              </a>
            </Link>
            <Link to="/about">
              <a href="#" className="nav-item nav-link">
                About
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
            {useEffect(() => {
              auth();
            }, [currentUser])}
            {showMe && (
              <Link to="/search">
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

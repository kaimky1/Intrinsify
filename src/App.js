import "./css/App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import TopGainersLosers from "./components/TopGainersLosers";
import TopLosers from "./components/TopLosers";
import Graph from "./components/Graph";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import News from "./components/News";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/search"
          element={
            <>
              <Search />
              <div className="GainsLosses">
                <h1 id="topGainHeader">Top Gainers</h1>
                <div className="topGainers">
                  <TopGainersLosers />
                </div>
                <h1 id="topLossHeader">Top Losers</h1>
                <div className="topLosers">
                  <TopLosers />
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/search/:elementSymbol"
          element={
            <div>
              <Display />
              <Graph />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="registerPage">
              <Register />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="loginPage">
              <Login />
            </div>
          }
        />
        <Route path="/home"
        element={<Home />} />
        <Route path="/news"
        element={<News />} />
        

      </Routes>
    </div>
  );
}

export default App;

import "./css/App.css";
import React, { useState, useEffect, createContext } from "react";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import Graph from "./components/Graph";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import News from "./components/News";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";

export const UsernameContext = createContext();

function App() {
  const [username, setUsername] = useState();

  let checkUsername = Boolean(localStorage.getItem("username"));

  useEffect(()=> {
    setUsername(checkUsername)
  }, [checkUsername])
  
  return (
    <div className="App">
      <UsernameContext.Provider value={{username, setUsername}}>
      <Header />
      <Routes>
        <Route
          path="/search"
          element={
            <>
              <Search />
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
        <Route path ="/watchlist" element={<Watchlist />} />


      </Routes>
      </UsernameContext.Provider>
    </div>
  );
}

export default App;

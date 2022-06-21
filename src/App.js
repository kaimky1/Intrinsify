import "./css/App.css";
import React, { useState, useEffect, createContext } from "react";
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
import About from "./components/About";
import Header from "./components/Header";

export const UsernameContext = createContext();

function App() {
  const [username, setUsername] = useState()

  let checkUsername = Boolean(localStorage.getItem("username"))

  useEffect(()=> {
    setUsername(checkUsername)
  }, [checkUsername])

console.log("username",username)

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
        <Route path ="/about" element={<About />} />


      </Routes>
      </UsernameContext.Provider>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import TopGainersLosers from "./components/TopGainersLosers";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route index element={<>
        <Search />
        <div className="topGainers"><TopGainersLosers /></div>
        </>} />
        <Route path="stocks" element={<Display />} />
      </Routes>
      
    </div>
  );
}

export default App;

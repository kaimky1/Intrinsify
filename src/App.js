import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Display from "./components/Display";

function App() {
  return (
    <div>
      <Routes>
          <Route index element={<Search />} />
          <Route path="stocks" element={<Display/>}/>
      </Routes>
    </div>
  );
}

export default App;

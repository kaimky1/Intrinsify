import React, { useEffect, useState } from "react";

var axios = require("axios").default;
let userID = Number(window.localStorage.getItem("userID"));

const Watchlist = () => {
  const [post, setPost] = useState([]);
  const [stock, setStock] = useState([]);
 
useEffect(() => {
    axios.get(`http://localhost:4004/getFavorite`, {
      params: {
        userID: userID,
      },
    })
    .then((res) => {
      setPost(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])
  console.log(post)
post.map((element, index) => {
  
})
  return (
    <div>
      <h1>Watchlist</h1>
    </div>
  );
};

export default Watchlist;

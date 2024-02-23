import React, { useState, useEffect } from "react";
import { PlaybackGrantInstance } from "twilio/lib/rest/media/v1/playerStreamer/playbackGrant";

var axios = require("axios").default;

const News = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/stock_news?limit=100&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //Get current posts

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost)

  //Change page

  const paginate = (number) => {
    setCurrentPage(number)
  }

  let newsResults = currentPosts.map((element, index) => {
    return (
      <div className="col">
        <div className="card h-100">
          <img src={element.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.text}</p>
            <a href={element.url} class="btn btn-primary">
              Link
            </a>
          </div>
          <div class="card-footer">
            <small class="text-muted">{element.publishedDate}</small>
          </div>
        </div>
      </div>
    );
  });

  const pageNumbers = []

  for(let i = 1; i <= (post.length/postsPerPage); i++){
    pageNumbers.push(i)
  }

  return (
    <div>
      <h1>Stock News</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">{newsResults}</div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        )
        )}
        </ul>
      </nav>
      {/* <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/news/page2">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default News;

//boiler code of React with main function same a file name and export

import React, { useState, useEffect } from "react";
import axios from "axios";

console.log("Image.js", process.env.REACT_APP_UNSPLASH_ACCESS_KEY);
const ImageSearch = ({ setImageList }) => {
  const [SearchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);
    axios
      .get("https://api.unsplash.com/search/photos", {
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
        params: { query: SearchQuery || "random", per_page: 34 },
      })
      .then((response) => {
        setImageList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div id="imageSearch">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Image"
          value={SearchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default ImageSearch;

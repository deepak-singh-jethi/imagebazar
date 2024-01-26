//boiler code of React with main function same a file name and export

import React, { useState } from "react";
import axios from "axios";

const ImageSearch = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [imageList, setImageList] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.unsplash.com/search/photos", {
        headers: {
          "Accept-Version": "v1",
          Authorization:
            "Client-ID Y8xqDQb7fqK4coR3ERdK4s8z5-aPqUl0t3FY0b69iQQ",
        },
        params: { query: SearchQuery },
      })
      .then((response) => {
        console.log(response.data.results);
        setImageList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Search"
          value={SearchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default ImageSearch;

import React, { useState } from "react";
import ImageSearch from "./components/ImageSearch";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  const [imageList, setImageList] = useState([]);
  return (
    <div className="App">
      <ImageSearch setImageList={setImageList} />
      <ImageGallery imageList={imageList} />
    </div>
  );
}

export default App;

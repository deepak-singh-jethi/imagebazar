import React, { useEffect, useState } from "react";
import ImageSearch from "./components/ImageSearch";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ImageSearch />
      <ImageGallery />
    </div>
  );
}

export default App;

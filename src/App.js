import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/random?query=grass", {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.urls.small);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {image && <img src={image} alt="grass" />}
      </header>
    </div>
  );
}

export default App;

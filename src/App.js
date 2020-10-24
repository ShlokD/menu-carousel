import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import images from "./images";

const Carousel = ({ images }) => {
  useEffect(() => {
    document.title = "Menu Carousel";
  }, [null]);
  const [selectedImage, setSelectedImage] = useState("");

  const toggleElem = (name) => {
    setSelectedImage(name);
  };

  const showElem = (name) => {
    const elemId = `carousel-item-${name}`;
    const elem = document.getElementById(elemId);
    elem.scrollIntoView({ behaviour: "smooth", block: "center" });
  };

  return (
    <div class="flex">
      <div className="w-75 flex flex-column items-center">
        {images.map((image, index) => {
          return (
            <img
              key={`carousel-item-${index}`}
              alt={image.name}
              id={`carousel-item-${image.name}`}
              className="ma4 pa4 h-75 w-80 shadow-2"
              src={image.src}
              height="75%"
              width="80%"
              style={{
                transform: `rotateX(${
                  selectedImage === image.name ? "0deg" : "45deg"
                })`,
                transition: "transform 0.5s ease-in-out",
                perspective: "800px",
              }}
            ></img>
          );
        })}
      </div>
      <div className="w-25 h-100 fixed right-0 flex flex-column items-start justify-center">
        {images.map(({ name }, index) => {
          return (
            <div
              key={`list-item-${index}`}
              onMouseEnter={() => showElem(name)}
              onChange={() => toggleElem(name)}
              className="dib ma2 pa4 pointer tc"
            >
              <input
                className="dn"
                type="radio"
                id={name}
                name="menu-item"
              ></input>
              <label className="pointer underline f4" htmlFor={name}>
                {name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;

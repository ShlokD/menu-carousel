import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import images from "./images";

const Carousel = ({ images }) => {
  useEffect(() => {
    document.title = "Menu Carousel";
  });
  const [selectedImage, setSelectedImage] = useState("");

  const toggleElem = (name) => {
    setSelectedImage(name);
  };

  const showElem = (name) => {
    const elemId = `carousel-item-${name}`;
    const elem = document.getElementById(elemId);
    elem.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div class="flex">
      <div className="w-75 flex flex-column items-center">
        {images.map((image, index) => {
          const selected = selectedImage === image.name;
          return (
            <div className="flex items-center">
              {selected && <p>{image.description}</p>}
              <img
                key={`carousel-item-${index}`}
                alt={image.name}
                id={`carousel-item-${image.name}`}
                className="mv5 pa4 shadow-2"
                src={image.src}
                height="75%"
                width="80%"
                style={{
                  transform: `rotateX(${selected ? "18deg" : "0deg"}) rotateY(${
                    selected ? "45deg" : "0deg"
                  }) translate(${selected ? "120px" : "0px"})`,
                  transition: "transform 0.5s ease-in-out",
                  perspective: "800px",
                }}
              ></img>
            </div>
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
    <div className="App pa4">
      <Carousel images={images} />
    </div>
  );
}

export default App;

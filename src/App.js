import './App.css';

import { useState } from "react"

function ImageCarousel() {
    const [currentImage, setCurrentImage] = useState(0)

    function preImg() {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
    }

    function nextImg() {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
    }

    return (
        <div className="image-carousel">
            <h1 className="title">Project 1: Carousel</h1>
            <div className="slider">
                <div className="pre-btn" onClick={preImg}>
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div className="image">
                    <img src={images[currentImage]}></img>
                </div>
                <div className="next-btn" onClick={nextImg}>
                <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]

function App() {
  return (
    <div className="App">
      <ImageCarousel />
    </div>
  );
}

export default App;

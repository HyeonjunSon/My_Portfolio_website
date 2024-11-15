import React, { useState, useEffect } from 'react';
import '../App.css'; // Make sure to create and import the CSS file for styling

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'image1.jpg', // Replace with your image paths
    'image2.jpg',
    'image3.jpg',
  ];

  // Move to the next image
  const moveSlide = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide('next');
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  return (
    <div className="home">
    <div className="hero-content">
      <h1>Welcome to Hyeonjun's Portfolio</h1>
    </div>
  
    {/* Label outside and above the carousel */}
    <h2 className="carousel-label">Project</h2>
  
    <div className="carousel-container"> 
      <div className="carousel">
        <div className="carousel-item">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
      </div>
      <button className="prev" onClick={() => moveSlide('prev')}>&#10094;</button>
      <button className="next" onClick={() => moveSlide('next')}>&#10095;</button>
    </div>
  </div>
  );
}

export default Home;

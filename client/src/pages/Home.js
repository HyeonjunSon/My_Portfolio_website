import React, { useState, useEffect } from 'react';
import '../App.css'; // 스타일링 파일

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'image1.jpg', // 이미지 경로를 실제 경로로 교체
    'image2.jpg',
    'image3.jpg',
  ];

  // 다음 슬라이드로 이동
  const moveSlide = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  // 3초마다 자동 슬라이드 이동
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide('next');
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트가 unmount 될 때 interval 제거
  }, []);

  return (
    <div className="main-content">
    <div className="home">
      <div className="hero-content">
        <h1>Welcome to Hyeonjun's Portfolio</h1>
      </div>

      {/* Carousel Label */}
      <h2 className="carousel-label">Project</h2>

      {/* Carousel */}
      <div className="carousel-container">
        {/* 현재 이미지 */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
        {/* 이전/다음 버튼 */}
        <button className="prev" onClick={() => moveSlide('prev')}>
          &#10094;
        </button>
        <button className="next" onClick={() => moveSlide('next')}>
          &#10095;
        </button>
      </div>
    </div>
    </div>
  );
}

export default Home;

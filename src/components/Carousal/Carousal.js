import React, { useState, useEffect, useCallback } from "react";
import "./Carousal.css";

function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/dquxo9syn/image/upload/v1674751519/Tasty%20Kitchens/tacos_c7zysf.jpg",
    "https://res.cloudinary.com/dquxo9syn/image/upload/v1674751519/Tasty%20Kitchens/sushi_eoqm9y.jpg",
    "https://res.cloudinary.com/dquxo9syn/image/upload/v1674751519/Tasty%20Kitchens/pizza_ilzqiq.jpg",
  ];

//   const goToPrevSlide = () => {
//     if (currentIndex === 0) {
//       setCurrentIndex(images.length - 1);
//     } else {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

  const goToNextSlide = useCallback(() => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    let slide = setInterval(function () {
      goToNextSlide();
    }, 3500);

    return () => {
      clearInterval(slide);
    };
  }, [goToNextSlide]);

  return (
    <div className="carousal_container">
      <div className="carousal">
        {
            images.map((image,index) => (
            <div className="image_container">
                <img
                src={image}
                alt=""
                className="carousal-image banners"
                key={index}
                style={{
                    width: "100%",
                    transform: `translateX(calc(-${currentIndex}* 100%))`,
                    transition: "transform 900ms ",
                }}
                />
            </div>
            ))
        }
      </div>
    </div>
  );
}

export default Carousal;

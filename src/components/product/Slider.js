import React, { useState, useEffect } from "react";
import "./Slider.css";
const images = [
    "https://cdn.homeshopping.pk/templates/ResGarden/images/HomeSlider2018/smartphones-wf2022-1440x330.png",
    "https://cdn.homeshopping.pk/templates/ResGarden/images/HomeSlider2018/smartphones-wf2022-1440x330.png",
    "https://cdn.homeshopping.pk/templates/ResGarden/images/HomeSlider2018/applicance-wf2022-1440x330.png",
    "https://cdn.homeshopping.pk/templates/ResGarden/images/HomeSlider2018/whitefriday-wf2022-1440x330.png",

  ];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const next = currentSlide + 1;
      if (next >= images.length) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(next);
      }
    }, 3000); // change the interval time as per your requirement
    return () => clearInterval(intervalId);
  }, [currentSlide, images]);

  const nextSlide = () => {
    const next = currentSlide + 1;
    if (next >= images.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(next);
    }
  };

  const prevSlide = () => {
    const prev = currentSlide - 1;
    if (prev < 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(prev);
    }
  };

  return (
    <div className="slider">
      <img src={images[currentSlide]} alt="" />
      <div className="controls">
        <button onClick={prevSlide}>{"<"}</button>
        <button onClick={nextSlide}>{">"}</button>
      </div>
    </div>
  );
};

export default Slider;

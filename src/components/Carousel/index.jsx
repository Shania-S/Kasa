import "./Carousel.scss";
import { useState } from "react";
import arrowLeft from "./../../assets/arrow-left.png";
import arrowRight from "./../../assets/arrow-right.png";

export function Carousel({ data, title }) {
  const [slide, setSlide] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      {data.length > 1 && (
        <img
          src={arrowLeft}
          className="arrow arrow-left"
          alt="left arrow icon"
          onClick={prevSlide}
        />
      )}
      {data.map((item, index) => {
        return (
          <img
            src={item}
            alt={`${title + index}`}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      {data.length > 1 && (
        <img
          src={arrowRight}
          className="arrow arrow-right"
          alt="right arrow icon"
          onClick={nextSlide}
        />
      )}
      {data.length > 1 && (
        <span className="indicators">
          {slide + 1}/{data.length}
        </span>
      )}
    </div>
  );
}

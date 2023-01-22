import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";

const Banner = () => {
  const banners = [
    {
      url: banner1,
      title: "banner1",
    },
    {
      url: banner2,
      title: "banner2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // styles
  const arrowStyle =
    "absolute top-[50%] rounded-full bg-white w-12 h-12 -translate-y-[50%] font-bold text-lg shadow-lg opacity-0  group-hover:opacity-100 ease-in duration-200";

  // slider logic
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  // automatic slide animation
  let autoslide = true;
  let slideInterval;
  let intervalTime = 3000;

  const auto = () => {
    slideInterval = setInterval(goToNext, intervalTime);
  };

  useEffect(() => {
    if (autoslide) {
      auto();
    }
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  return (
    <section className="py-10">
      <div className="relative z-0 group">
        <div>
          <img
            src={banners[currentIndex].url}
            alt="banner"
            className="animate-fadeIn"
          />
        </div>
        <div className="absolute bottom-3 left-3">
          {banners.map((item, index) => {
            return (
              <div
                className={`cursor-pointer h-2 w-2 md:h-4 md:w-4 mx-1 bg-white rounded-full inline-block shadow-lg ${
                  index !== currentIndex && "bg-opacity-50"
                }`}
                key={index}
                onClick={() => goToSlide(index)}
              ></div>
            );
          })}
        </div>
        <button
          className={`${arrowStyle} left-0 group-hover:-left-5`}
          id="prev"
          onClick={goToPrevious}
        >
          &#10094;
        </button>
        <button
          className={`${arrowStyle} right-0 group-hover:-right-5`}
          id="next"
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Banner;

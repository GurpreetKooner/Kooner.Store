import React from "react";
import banner1 from "../Assets/Banners/ImageBanner1.jpg";
import banner2 from "../Assets/Banners/ImageBanner2.jpg";
import banner3 from "../Assets/Banners/ImageBanner3.jpg";
import banner4 from "../Assets/Banners/ImageBanner4.jpg";
import "./ImageBannerSlider.css";

const images = [banner1, banner2, banner3, banner4];
const delay = 7000;

export const ImageBannerSlider = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((banner, idx) => (
          <img
            className="slide"
            key={idx} // Use idx as key for mapping array elements
            src={banner}
            alt={`Banner ${idx + 1}`} // Add meaningful alt text
          />
        ))}
      </div>
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

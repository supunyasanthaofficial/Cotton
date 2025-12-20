import React, { useState, useEffect } from "react";

const Header = ({
  images = [],
  autoSlide = true,
  height = "h-[500px]",
  showContent = false,

  welcomeText,
  title,
  description,

  buttonText,
  onButtonClick,
  buttonClass,

  align = "left",
  contentOffset = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoSlide, images.length]);

  return (
    <header className={`relative w-full ${height} overflow-hidden`}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={img} alt="Header" className="w-full h-full object-cover" />

          {/* <div className="absolute inset-0 bg-black/30" /> */}
        </div>
      ))}

      {showContent && (
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div
              className={`text-white flex flex-col ${
                align === "center"
                  ? "mx-auto text-center items-center"
                  : "max-w-2xl"
              } ${contentOffset}`}
            >
              {welcomeText && <p className="mb-4 text-lg">{welcomeText}</p>}

              {title && (
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
              )}

              {description && (
                <p className="text-white/90 mb-8 leading-relaxed">
                  {description}
                </p>
              )}

              {buttonText && (
                <button
                  onClick={onButtonClick}
                  className={`px-10 py-3 rounded-full font-semibold transition
                    ${buttonClass || "bg-white text-black hover:bg-gray-200"}
                  `}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {autoSlide && images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

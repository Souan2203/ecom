import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

import hero1 from "../assets/hero1.png";
import fashion1 from "../assets/fashion1.png";
import fashion2 from "../assets/fashion2.png";
import shoe from "../assets/shoe.png";

const Hero = () => {
  const slides = [
    {
      image: hero1,
      title: "Elevate Your Everyday",
      subtitle: "New Collection",
      description:
        "Discover timeless pieces designed for comfort, style, and modern living.",
    },
    {
      image: fashion1,
      title: "Fashion Redefined",
      subtitle: "Trending Styles",
      description:
        "Explore modern fashion trends curated just for you.",
    },
    {
      image: fashion2,
      title: "Luxury Meets Comfort",
      subtitle: "Premium Wear",
      description:
        "Premium collections crafted with elegance and quality.",
    },
    {
      image: shoe,
      title: "Step Into Style",
      subtitle: "Latest Footwear",
      description:
        "Complete your look with our newest footwear collection.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mb-10">
      <section className="relative w-full min-h-screen overflow-hidden rounded-none md:rounded-2xl shadow-md shadow-gray-400">
        {/* Background Slideshow */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center min-h-screen py-24 md:py-0">
            <div
              key={currentSlide}
              className="max-w-xl text-white text-center md:text-left"
            >
              {/* Subtitle */}
              <motion.p
                key={`subtitle-${currentSlide}`}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="text-xs sm:text-base md:text-xl lg:text-3xl font-serif font-bold uppercase tracking-[2px] md:tracking-[4px]"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Title */}
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                }}
                className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-md mx-auto md:mx-0 text-gray-100"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Button */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                }}
                className="mt-8 bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg w-fit mx-auto md:mx-0 hover:bg-black transition-all duration-300 shadow-xl shadow-black/50"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div
          className="
            absolute
            bottom-24
            md:bottom-16
            left-1/2
            -translate-x-1/2
            md:left-auto
            md:right-8
            md:translate-x-0
            z-20
            flex
            gap-2
            md:gap-4
          "
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300
                w-12 h-16
                sm:w-16 sm:h-24
                md:w-24 md:h-36
                lg:w-28 lg:h-40
                ${
                  currentSlide === index
                    ? "scale-110 border-2 md:border-4 border-white"
                    : "opacity-70 hover:opacity-100"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div
          className="
            absolute
            bottom-6
            md:bottom-8
            left-1/2
            -translate-x-1/2
            flex
            gap-3
            z-20
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white w-8"
                  : "bg-white/50 w-3"
              }`}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
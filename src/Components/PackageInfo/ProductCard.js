import React, { useState, useEffect } from 'react';

const ProductCard = ({ title, images, price }) => {
  // State to handle the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Auto slide every 3 seconds, but only when not hovering
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Auto slide every 3 seconds
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isHovered, images.length]);

  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)} // Track hover
      onMouseLeave={() => setIsHovered(false)} // Track when hover ends
    >
      <div className="relative w-full h-48 sm:h-56 md:h-60"> {/* Reduced height of image container */}
        {/* Image */}
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
        />
      </div>
      {/* Card Content */}
      <div className="p-4 sm:p-5">
        {/* Title */}
        <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate">
          {title}
        </h5>
        
        {/* Price Info */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {price}/-
            </span>
            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 block">
              Per Person
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


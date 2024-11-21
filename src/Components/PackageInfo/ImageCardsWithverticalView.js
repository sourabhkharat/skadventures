import React, { useEffect, useRef } from 'react';

// Image Card component for rendering each card
const ImageCard = ({ image, title }) => {
  return (
    <div className="w-full lg:w-1/4 sm:w-1/2 md:w-1/6 p-2 flex-shrink-0 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-lg"
      />
    </div>
//     <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 flex-shrink-0 rounded-lg overflow-hidden">
//   <img
//     src={image}
//     alt={title}
//     className="w-full h-44 object-cover rounded-lg"
//   />
// </div>

  );
};

const ImageCardsWithVerticalView = ({ verticalCards }) => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null); // Create a ref to store the interval

  // Auto-scroll every 3 seconds for carousel functionality
  useEffect(() => {
    const scrollCarousel = () => {
      const scrollWidth = carouselRef.current.scrollWidth;
      const scrollLeft = carouselRef.current.scrollLeft;
      const visibleWidth = carouselRef.current.clientWidth;
      const maxScroll = scrollWidth - visibleWidth;

      // Scroll to the next card
      if (scrollLeft < maxScroll) {
        carouselRef.current.scrollLeft += 150; // Scroll 150px to the left
      } else {
        carouselRef.current.scrollLeft = 0; // Reset to the start
      }
    };

    // Start the interval to scroll every 3 seconds
    intervalRef.current = setInterval(scrollCarousel, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  // Pause the carousel auto-scroll on hover
  const handleMouseEnter = () => {
    clearInterval(intervalRef.current); // Stop the interval when hovered
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      const scrollWidth = carouselRef.current.scrollWidth;
      const scrollLeft = carouselRef.current.scrollLeft;
      const visibleWidth = carouselRef.current.clientWidth;
      const maxScroll = scrollWidth - visibleWidth;

      if (scrollLeft < maxScroll) {
        carouselRef.current.scrollLeft += 150; // Scroll 150px to the left
      } else {
        carouselRef.current.scrollLeft = 0; // Reset to the start
      }
    }, 3000); // Restart the interval when the hover is gone
  };

  return (
    <div
      className="bg-white p-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Experience Nature, Explore!</h1>

      {/* Horizontal scrolling container */}
      <div
        className="overflow-x-auto flex items-center space-x-4"
        ref={carouselRef}
      >
        {/* Use Tailwind responsive classes for grid */}
        <div className="flex space-x-4 w-full">
          {verticalCards.map((card, index) => (
            <ImageCard key={index} image={card.image} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCardsWithVerticalView;


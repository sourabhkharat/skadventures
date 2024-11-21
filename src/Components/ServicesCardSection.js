import React from 'react';
import { useNavigate } from 'react-router-dom';
import camping from "../../src/Images/camping1.jpg";

const ServicesCardSection = ({ cardsData }) => {
  const navigate = useNavigate(); // Hook to handle navigation

  // Function to handle click event on card
  const handleCardClick = (path) => {
    navigate(path); // Navigate to the respective path passed in `path`
  };

  return (
    <section className="py-10 bg-cover bg-center" style={{ backgroundImage: `url(${camping})` }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Explore Our Destinations
        </h2>

        {/* Flexbox layout: All cards take full width and are aligned horizontally */}
        <div className="flex flex-wrap gap-6 justify-center">
          {cardsData && cardsData.length > 0 ? (
            cardsData.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-full md:w-full lg:w-full xl:w-full cursor-pointer"
                onClick={() => handleCardClick(card.path)} // Entire card is clickable
              >
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:border-indigo-500 hover:shadow-xl hover:border-2"
                >
                  {/* Flexbox for horizontal layout of image and content */}
                  <div className="flex flex-col sm:flex-row">
                    {/* Image section with curved right side border */}
                    <img
                      src={card.image} // Use image from card object
                      alt={card.title} // Use title from card object
                      className="w-full h-48 sm:h-64 object-cover rounded-t-lg sm:rounded-r-lg transition-transform duration-300 hover:scale-110"
                    />
                    {/* Content section */}
                    <div className="p-4 sm:pl-6 flex flex-col justify-between w-full">
                      {/* Title of the card */}
                      <h3 className="text-xl font-semibold text-blue-700">{card.title}</h3>
                      {/* Description */}
                      <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                      {/* Explore More button */}
                      <button
                        className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800"
                      >
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No cards available.</div> // Fallback message if no data is available
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardSection;



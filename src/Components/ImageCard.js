import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBus, FaUtensils, FaMusic, FaFutbol } from 'react-icons/fa'; // Import bus and utensils icons for meal
import { GiCampingTent} from 'react-icons/gi'; // Import tent icon


const ImageCard = () => {
  const cardsData = [
    {
      title: "Pawana Camping",
      image: "https://via.placeholder.com/500x300/FF5733/fff?text=Mountain+Adventure",
      path: "/pawana-camping",
    },
    {
      title: "Panshet Camping",
      image: "https://via.placeholder.com/500x300/33C1FF/fff?text=Beach+Exploration",
      path: "/panshet-camping",
    },
    // {
    //   title: "Alibag Beach camping",
    //   image: "https://via.placeholder.com/500x300/33FF57/fff?text=Forest+Retreat",
    //   path: "/forest-retreat",
    // },
  ];

  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-10 bg-gradient-to-r from-blue-50 via-indigo-100 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Explore Our Destinations
        </h2>

        {/* Grid layout: Adjusts from 1 column on small screens to 3 columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {cardsData && cardsData.length > 0 ? (
            cardsData.map((card, index) => (
              <div
                key={index}
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-indigo-500 border-2 border-transparent rounded-lg"
                onClick={() => handleCardClick(card.path)}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Flexbox for vertical layout of image and content */}
                  <div className="flex flex-col">
                    {/* Image section */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-110"
                    />
                    <div className="p-4 flex flex-col justify-between h-48">
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{card.title}</h3>

                      <div className="flex flex-row justify-center items-center space-x-6 mb-3 text-gray-600">
                      <GiCampingTent className="w-6 h-6" title="Tent" />
                        <FaUtensils className="w-6 h-6" title="Meal" />
                        <FaMusic className="w-6 h-6" title="Music" />
                        <FaFutbol className="w-6 h-6" title="Tent" />
                        <FaBus className="w-6 h-6" title="Transport" />
                      </div>
                      <button
                        className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                      >
                        See Details
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

export default ImageCard;

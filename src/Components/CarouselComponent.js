import React from "react";
import { Carousel } from "flowbite-react";

const CarouselComponent = ({ images, title, price }) => {
  return (
    <div className="mb-12 text-center">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 sm:text-3xl lg:text-4xl">{title}</h2>
      
      {/* Carousel */}
      <div className="flex justify-center">
        <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={images}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          ))}
        </Carousel>
      </div>
      
      {/* Price Section */}
      <p className="text-xl text-blue-600 font-bold mt-4">{price}</p>
    </div>
  );
};

export default CarouselComponent;

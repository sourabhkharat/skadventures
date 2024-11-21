import React from 'react';
import ServicesCardSection from './ServicesCardSection';
import campinggirls from "../../src/Images/CampingGirls.jpg"
// import resort from "../../src/Images/Resort.png"

function ServicesData() {
  const cardsData = [
    {
      title: "Camping",
      description:"Experience the magic of stargazing under the open sky, accompanied by live music and mouthwatering food. Escape into nature, unwind, and let the night’s rhythm soothe your soul. Create lasting memories with every moment. Don’t miss this unforgettable adventure – reserve your spot now and immerse yourself in the beauty of nature!",
      image: campinggirls,
      path: "/camping",
    },
    // {
    //   title: "Resorts and Villas",
    //   description:"Surrounded by the serene beauty of lush landscapes and peaceful waters, Paawana Camping is the ideal place to escape into nature. The crisp air, the sound of chirping birds, and the gentle rustle of trees create an atmosphere of tranquility that will rejuvenate your mind, body, and soul.",
    //   image: resort,
    //   path: "/panshet-camping",
    // },
    // {
    //   title: "Tour Packages",
    //   description:"Nothing",
    //   image: tour,
    //   path: "/forest-retreat",
    // },
    
  ];

  return (
    <div className="App">
      <ServicesCardSection cardsData={cardsData} />
    </div>
  );
}

export default ServicesData;

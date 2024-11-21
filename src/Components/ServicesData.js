import React from 'react';
import ServicesCardSection from './ServicesCardSection';
import campinggirls from "../../src/Images/CampingGirls.jpg"
// import resort from "../../src/Images/Resort.png"
import camping1 from "../../src/Images/camping1.jpg"
import cmn5 from "../../src/Images/pawana/cmn5.JPG"


function ServicesData() {
  const cardsData = [
    {
      title: "Camping",
      description:"Experience the magic of stargazing under the open sky, accompanied by live music and mouthwatering food. Escape into nature, unwind, and let the night’s rhythm soothe your soul. Create lasting memories with every moment. Don’t miss this unforgettable adventure – reserve your spot now and immerse yourself in the beauty of nature!",
      image: campinggirls,
      path: "/camping",
    },
    {
      title: "Pawana New year Camping 2025",
      description:"Immerse yourself in the rhythm of our DJ system, witness a dazzling firecracker show, savor the joy of cake cutting, and treat your taste buds to delightful ice cream, Join us for a night of celebration under the stars, creating memories that will last a lifetime. Don’t miss the magic – reserve your spot now and welcome the New Year in style at Pawna Camping!",
      image: cmn5,
      path: "/nyc-pawana",
    },
    {
      title: "Panshet New Year Camping 2025",
      description:"Celebrate the arrival of 2025 in the serene beauty of Panshet Lake! Escape the chaos of city celebrations and welcome the New Year by a night of music, bonfires, delicious food, and exciting activities. Dance under the stars, make memories with friends and loved ones, and toast to new beginnings by the lakeside. Whether you’re relaxing by the campfire promises an unforgettable New Year’s Eve experience.",
      image: camping1,
      path: "/nyc-panshet",
    },
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

// // import React, { useState, useEffect } from 'react';
// // import grp1 from "../../src/Images/Group/Campers/grp1.jpg"
// // import grp2 from "../../src/Images/Group/Campers/grp2.jpg"
// // import grp3 from "../../src/Images/Group/Campers/grp3.jpg"
// // import grp4 from "../../src/Images/Group/Campers/grp4.JPG"
// // import grp5 from "../../src/Images/Group/Campers/grp5.jpg"
// // import grp6 from "../../src/Images/Group/Campers/grp6.JPG"
// // // import grp7 from "../../src/Images/Group/Campers/grp7.JPG"
// // import grp8 from "../../src/Images/Group/Campers/grp8.jpg"
// // import grp9 from "../../src/Images/Group/Campers/grp9.jpg"

// // import tgrp1 from "../../src/Images/Group/Trekkers/tgrp1.jpg"
// // import tgrp2 from "../../src/Images/Group/Trekkers/tgrp2.jpg"
// // import tgrp3 from "../../src/Images/Group/Trekkers/tgrp3.jpg"
// // import tgrp4 from "../../src/Images/Group/Trekkers/tgrp4.jpg"
// // // import tgrp5 from "../../src/Images/Group/Trekkers/tgrp5.jpg"
// // import tgrp6 from "../../src/Images/Group/Trekkers/tgrp6.jpg"
// // import tgrp7 from "../../src/Images/Group/Trekkers/tgrp7.jpg"
// // import tgrp8 from "../../src/Images/Group/Trekkers/tgrp8.jpg"
// // import tgrp9 from "../../src/Images/Group/Trekkers/tgrp9.jpg"
// // import tgrp10 from "../../src/Images/Group/Trekkers/tgrp10.jpg"
// // import tgrp11 from "../../src/Images/Group/Trekkers/tgrp11.jpg"
// // import tgrp12 from "../../src/Images/Group/Trekkers/tgrp12.jpg"



// // const ImageCarousel = () => {
// //   // Image sets
// //   const section1Images = [
// //     { url:  grp1},
// //     { url: grp5 },
// //     { url: grp8 },
// //     { url: grp2 },
// //     { url: grp3 },
// //     {url: grp9 },
// //     { url: grp4 },
// //     { url: grp6 },
// //   ];

// //   const section2Images = [
// //     { url: tgrp1},
// //     { url: tgrp2 },
// //     { url: tgrp3 },
// //     { url: tgrp4 },
// //     { url: tgrp6 },
// //     { url: tgrp7 },
// //     // { url: tgrp5 },
// //     { url: tgrp9 },
// //     { url: tgrp8 },
// //     { url: tgrp10 },
// //     { url: tgrp11 },
// //     { url: tgrp12 },
// //   ];

// //   // State to manage the active image section and current image index
// //   const [activeSection, setActiveSection] = useState(1);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   // Function to handle section switching
// //   const handleSectionChange = (section) => {
// //     setActiveSection(section);
// //     setCurrentImageIndex(0); // Reset image index when switching sections
// //   };

// //   // Auto-slide the images every 3 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex((prevIndex) => {
// //         const images = activeSection === 1 ? section1Images : section2Images;
// //         return (prevIndex + 1) % images.length;
// //       });
// //     }, 3000);

// //     return () => clearInterval(interval); // Cleanup interval on component unmount
// //   }, [activeSection]); // Dependency on activeSection to reset the interval when switching sections

// //   // Function to handle manual image change (left/right arrows)
// //   const handlePrevImage = () => {
// //     setCurrentImageIndex((prevIndex) => {
// //       const images = activeSection === 1 ? section1Images : section2Images;
// //       return (prevIndex - 1 + images.length) % images.length;
// //     });
// //   };

// //   const handleNextImage = () => {
// //     setCurrentImageIndex((prevIndex) => {
// //       const images = activeSection === 1 ? section1Images : section2Images;
// //       return (prevIndex + 1) % images.length;
// //     });
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100">
// //       {/* Section Buttons */}
// //       <div className="flex justify-center mb-6">
// //         <button
// //           onClick={() => handleSectionChange(1)}
// //           className={`py-2 px-6 rounded-lg text-white font-bold ${
// //             activeSection === 1 ? 'bg-green-600' : 'bg-gray-400'
// //           } hover:bg-green-500 transition-all duration-300`}
// //         >
// //            Campers!
// //         </button>
// //         <button
// //           onClick={() => handleSectionChange(2)}
// //           className={`ml-4 py-2 px-6 rounded-lg text-white font-bold ${
// //             activeSection === 2 ? 'bg-green-600' : 'bg-gray-400'
// //           } hover:bg-green-500 transition-all duration-300`}
// //         >
// //           Trekkers!
// //         </button>
// //       </div>

// //       {/* Image Carousel */}
// //       <div className="relative">
// //         {/* Left Arrow */}
// //         <button
// //           onClick={handlePrevImage}
// //           className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-green-600"
// //         >
// //           &#60;
// //         </button>

// //         {/* Image */}
// //         <div className="flex justify-center mb-6">
// //           {/* Image for Section 1 or Section 2 based on active section */}
// //           {activeSection === 1 && (
// //             <img
// //               src={section1Images[currentImageIndex].url}
// //               alt={`Group ${currentImageIndex + 1}`}
// //               className="w-full h-80 object-cover rounded-lg transition-transform duration-300"
// //             />
// //           )}

// //           {activeSection === 2 && (
// //             <img
// //               src={section2Images[currentImageIndex].url}
// //               alt={`Group ${currentImageIndex + 1}`}
// //               className="w-full h-80 object-cover rounded-lg transition-transform duration-300"
// //             />
// //           )}
// //         </div>

// //         {/* Right Arrow */}
// //         <button
// //           onClick={handleNextImage}
// //           className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-green-600"
// //         >
// //           &#62;
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageCarousel;

// import React, { useState, useEffect } from 'react';
// import grp1 from "../../src/Images/Group/Campers/grp1.jpg";
// import grp2 from "../../src/Images/Group/Campers/grp2.jpg";
// import grp3 from "../../src/Images/Group/Campers/grp3.jpg";
// import grp4 from "../../src/Images/Group/Campers/grp4.JPG";
// import grp5 from "../../src/Images/Group/Campers/grp5.jpg";
// import grp6 from "../../src/Images/Group/Campers/grp6.JPG";
// import grp8 from "../../src/Images/Group/Campers/grp8.jpg";
// import grp9 from "../../src/Images/Group/Campers/grp9.jpg";
// import tgrp1 from "../../src/Images/Group/Trekkers/tgrp1.jpg";
// import tgrp2 from "../../src/Images/Group/Trekkers/tgrp2.jpg";
// import tgrp3 from "../../src/Images/Group/Trekkers/tgrp3.jpg";
// import tgrp4 from "../../src/Images/Group/Trekkers/tgrp4.jpg";
// import tgrp6 from "../../src/Images/Group/Trekkers/tgrp6.jpg";
// import tgrp7 from "../../src/Images/Group/Trekkers/tgrp7.jpg";
// import tgrp9 from "../../src/Images/Group/Trekkers/tgrp9.jpg";
// import tgrp8 from "../../src/Images/Group/Trekkers/tgrp8.jpg";
// import tgrp10 from "../../src/Images/Group/Trekkers/tgrp10.jpg";
// import tgrp11 from "../../src/Images/Group/Trekkers/tgrp11.jpg";
// import tgrp12 from "../../src/Images/Group/Trekkers/tgrp12.jpg";

// const ImageCarousel = () => {
//   // Image sets
//   const section1Images = [
//     { url: grp1 },
//     { url: grp5 },
//     { url: grp8 },
//     { url: grp2 },
//     { url: grp3 },
//     { url: grp9 },
//     { url: grp4 },
//     { url: grp6 },
//   ];

//   const section2Images = [
//     { url: tgrp1 },
//     { url: tgrp2 },
//     { url: tgrp3 },
//     { url: tgrp4 },
//     { url: tgrp6 },
//     { url: tgrp7 },
//     { url: tgrp9 },
//     { url: tgrp8 },
//     { url: tgrp10 },
//     { url: tgrp11 },
//     { url: tgrp12 },
//   ];

//   const [activeSection, setActiveSection] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setCurrentImageIndex(0); // Reset image index when switching sections
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setCurrentImageIndex((prevIndex) => {
//           const images = activeSection === 1 ? section1Images : section2Images;
//           return (prevIndex + 1) % images.length;
//         });
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [activeSection, isHovered]);

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) => {
//       const images = activeSection === 1 ? section1Images : section2Images;
//       return (prevIndex - 1 + images.length) % images.length;
//     });
//   };

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => {
//       const images = activeSection === 1 ? section1Images : section2Images;
//       return (prevIndex + 1) % images.length;
//     });
//   };

//   const handleImageHover = () => {
//     setIsHovered(true);
//     handleNextImage();
//   };

//   const handleImageLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       {/* Section Buttons */}
//       <div className="flex flex-col sm:flex-row justify-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//         <button
//           onClick={() => handleSectionChange(1)}
//           className={`py-2 px-6 rounded-lg text-white font-bold ${
//             activeSection === 1 ? 'bg-green-600' : 'bg-gray-400'
//           } hover:bg-green-500 transition-all duration-300`}
//         >
//           Campers!
//         </button>
//         <button
//           onClick={() => handleSectionChange(2)}
//           className={`py-2 px-6 rounded-lg text-white font-bold ${
//             activeSection === 2 ? 'bg-green-600' : 'bg-gray-400'
//           } hover:bg-green-500 transition-all duration-300`}
//         >
//           Trekkers!
//         </button>
//       </div>

//       {/* Image Carousel */}
//       <div className="relative">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrevImage}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-green-600 sm:text-2xl text-lg"
//         >
//           &#60;
//         </button>

//         {/* Image */}
//         <div
//           className="flex justify-center mb-6"
//           onMouseEnter={handleImageHover}
//           onMouseLeave={handleImageLeave}
//         >
//           {activeSection === 1 && (
//             <img
//               src={section1Images[currentImageIndex].url}
//               alt={`Group ${currentImageIndex + 1}`}
//               className="w-full sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300"
//             />
//           )}

//           {activeSection === 2 && (
//             <img
//               src={section2Images[currentImageIndex].url}
//               alt={`Group ${currentImageIndex + 1}`}
//               className="w-full sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300"
//             />
//           )}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNextImage}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-green-600 sm:text-2xl text-lg"
//         >
//           &#62;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;
import React, { useState, useEffect } from 'react';
import grp1 from "../../src/Images/Group/Campers/grp1.jpg";
import grp2 from "../../src/Images/Group/Campers/grp2.jpg";
import grp3 from "../../src/Images/Group/Campers/grp3.jpg";
import grp4 from "../../src/Images/Group/Campers/grp4.JPG";
import grp5 from "../../src/Images/Group/Campers/grp5.jpg";
import grp6 from "../../src/Images/Group/Campers/grp6.JPG";
import grp8 from "../../src/Images/Group/Campers/grp8.jpg";
import grp9 from "../../src/Images/Group/Campers/grp9.jpg";
import tgrp1 from "../../src/Images/Group/Trekkers/tgrp1.jpg";
import tgrp2 from "../../src/Images/Group/Trekkers/tgrp2.jpg";
import tgrp3 from "../../src/Images/Group/Trekkers/tgrp3.jpg";
import tgrp4 from "../../src/Images/Group/Trekkers/tgrp4.jpg";
import tgrp6 from "../../src/Images/Group/Trekkers/tgrp6.jpg";
import tgrp7 from "../../src/Images/Group/Trekkers/tgrp7.jpg";
import tgrp9 from "../../src/Images/Group/Trekkers/tgrp9.jpg";
import tgrp8 from "../../src/Images/Group/Trekkers/tgrp8.jpg";
import tgrp10 from "../../src/Images/Group/Trekkers/tgrp10.jpg";
import tgrp11 from "../../src/Images/Group/Trekkers/tgrp11.jpg";
import tgrp12 from "../../src/Images/Group/Trekkers/tgrp12.jpg";

const ImageCarousel = () => {
  // Image sets
  const section1Images = [
    { url: grp1 },
    { url: grp5 },
    { url: grp8 },
    { url: grp2 },
    { url: grp3 },
    { url: grp9 },
    { url: grp4 },
    { url: grp6 },
  ];

  const section2Images = [
    { url: tgrp1 },
    { url: tgrp2 },
    { url: tgrp3 },
    { url: tgrp4 },
    { url: tgrp6 },
    { url: tgrp7 },
    { url: tgrp9 },
    { url: tgrp8 },
    { url: tgrp10 },
    { url: tgrp11 },
    { url: tgrp12 },
  ];

  const [activeSection, setActiveSection] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setCurrentImageIndex(0); // Reset image index when switching sections
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => {
          const images = activeSection === 1 ? section1Images : section2Images;
          return (prevIndex + 1) % images.length;
        });
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeSection, isHovered]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const images = activeSection === 1 ? section1Images : section2Images;
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const images = activeSection === 1 ? section1Images : section2Images;
      return (prevIndex + 1) % images.length;
    });
  };

  const handleImageHover = () => {
    setIsHovered(true);
    handleNextImage();
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Section Buttons */}
      <div className="flex flex-col sm:flex-row justify-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => handleSectionChange(1)}
          className={`py-2 px-6 rounded-lg text-white font-bold ${
            activeSection === 1 ? 'bg-green-600' : 'bg-gray-400'
          } hover:bg-green-500 transition-all duration-300`}
        >
          Campers!
        </button>
        <button
          onClick={() => handleSectionChange(2)}
          className={`py-2 px-6 rounded-lg text-white font-bold ${
            activeSection === 2 ? 'bg-green-600' : 'bg-gray-400'
          } hover:bg-green-500 transition-all duration-300`}
        >
          Trekkers!
        </button>
      </div>

      {/* Image Carousel */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-green-600 sm:text-xl text-sm"
        >
          &#60;
        </button>

        {/* Image */}
        <div
          className="flex justify-center mb-6"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          {activeSection === 1 && (
            <img
              src={section1Images[currentImageIndex].url}
              alt={`Group ${currentImageIndex + 1}`}
              className="w-full sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300"
            />
          )}

          {activeSection === 2 && (
            <img
              src={section2Images[currentImageIndex].url}
              alt={`Group ${currentImageIndex + 1}`}
              className="w-full sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300"
            />
          )}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-green-600 sm:text-xl text-sm"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;


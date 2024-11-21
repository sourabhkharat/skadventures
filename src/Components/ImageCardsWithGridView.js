// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa'; // Close icon from react-icons

// // ImageCard Component
// const ImageCard = ({ image, title, onClick }) => {
//   return (
//     <div
//       className="relative border border-gray-300 rounded-lg overflow-hidden cursor-pointer m-2 w-full sm:w-40 md:w-48 lg:w-60 hover:scale-105 transform transition-all duration-300"
//       onClick={() => onClick(image)}
//     >
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-40 object-cover"
//       />
//       <h4 className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-lg font-semibold text-center p-2">
//         {title}
//       </h4>
//     </div>
//   );
// };

// // ImageGrid Component
// const ImageGrid = ({ images, onClose }) => {
//   const handleOutsideClick = (e) => {
//     if (!e.target.closest('.grid-view')) {
//       onClose();
//     }
//   };

//   return (
//     <div className="p-6 pt-20"> 
//   <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-20 p-4 overflow-hidden"
//       onClick={handleOutsideClick}
//     >
//       <div className="grid-view relative bg-white p-4 rounded-lg max-w-4xl w-full mb-10">
//         <button
//           className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
//           onClick={onClose}
//         >
//           <FaTimes size={20} />
//         </button>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[80vh] overflow-y-auto">
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`img-${index}`}
//               className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg"
//             />
//           ))}
//         </div>
//       </div>
//       </div>

//     </div>
//   );
// };
// // ImageCardsWithGridView Component
// const ImageCardsWithGridView = () => {
//   const [cards, setCards] = useState([
//     { title: 'Card 1', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 2', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 3', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 4', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 5', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 6', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 7', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 8', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 9', image: 'https://via.placeholder.com/300' },
//   ]);

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleCardClick = (image) => {
//     setSelectedImage(image);
//     document.body.style.overflow = 'hidden'; // Disable scrolling in the background
//   };

//   const handleCloseGrid = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto'; // Re-enable scrolling in the background
//   };

//   return (
//     <div className="p-6 pt-20"> {/* Added padding-top to avoid navbar overlap */}
//       <h1 className="text-3xl font-bold mb-6">Image Cards</h1>
//       <div className="flex flex-wrap gap-6">
//         {cards.map((card, index) => (
//           <ImageCard
//             key={index}
//             image={card.image}
//             title={card.title}
//             onClick={handleCardClick}
//           />
//         ))}
//       </div>

//       {/* Show Grid View if an image is selected */}
//       {selectedImage && (
//         <ImageGrid images={cards.map((card) => card.image)} onClose={handleCloseGrid} />
//       )}
//     </div>
//   );
// };

// export default ImageCardsWithGridView;




// import React, { useState } from 'react';

// const ImageCard = ({ image, title, onClick }) => {
//   return (
//     <div
//       className="border border-gray-300 rounded-lg p-4 cursor-pointer text-center m-2 w-40"
//       onClick={() => onClick(image)}
//     >
//       <img src={image} alt={title} className="w-full rounded-lg" />
//       <h4 className="mt-2 text-lg font-semibold">{title}</h4>
//     </div>
//   );
// };

// const ImageGrid = ({ images, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col z-10 p-4">
//       <button
//         className="mb-4 px-6 py-2 text-white bg-red-500 rounded-md font-semibold text-lg hover:bg-red-600"
//         onClick={onClose}
//       >
//         Close Grid View
//       </button>
//       <div className="grid grid-cols-3 gap-6 max-w-4xl max-h-[80vh] overflow-y-auto">
//         {images.map((img, index) => (
//           <img key={index} src={img} alt={`img-${index}`} className="w-full rounded-lg" />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ImageCardsWithGridView = () => {
//   const [cards, setCards] = useState([
//     { title: 'Card 1', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 2', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 3', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 4', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 5', image: 'https://via.placeholder.com/150' },
//     { title: 'Card 6', image: 'https://via.placeholder.com/150' },
//   ]);

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleCardClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleCloseGrid = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Image Cards</h1>
//       <div className="flex flex-wrap gap-6">
//         {cards.map((card, index) => (
//           <ImageCard key={index} image={card.image} title={card.title} onClick={handleCardClick} />
//         ))}
//       </div>

//       {selectedImage && (
//         <ImageGrid images={cards.map((card) => card.image)} onClose={handleCloseGrid} />
//       )}
//     </div>
//   );
// };

// export default ImageCardsWithGridView;
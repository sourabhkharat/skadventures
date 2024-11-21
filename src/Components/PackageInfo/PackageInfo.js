import React from "react";
import qrcode from "../../Images/qr-code.jpg";
import camping from "../../Images/camping.jpg";
import ProductCard from "./ProductCard";
import ImageCardsWithVerticalView from "./ImageCardsWithverticalView";

const PackageInfo = ({ data }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center py-12 px-6 sm:px-12 lg:px-16"
      style={{ backgroundImage: `url(${camping})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 max-w-full sm:max-w-4xl mx-auto">
        {/* Package Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 sm:text-4xl lg:text-5xl">
          {data.itinerary?.camping}
        </h1>
          {/* <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 sm:text-4xl lg:text-5xl">
          {data.title}
        </h1> */}
        <p className="text-xl text-center text-red-700 mb-6">{data.tagline}</p>
        <p className="text-base sm:text-lg lg:text-xl text-center mb-8">{data.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {data.productData?.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          images={product.images}
          price={product.price}
        />
      ))}
    </div>

        <div>
            {data.verticalCards && (
            <ImageCardsWithVerticalView verticalCards={data.verticalCards} />
          )}
        </div>

         {/* Cost Section */}
         <div className="mb-8 mt-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 sm:text-3xl lg:text-4xl">Cost💰</h2>
            <div className="space-y-4">
                <div className="text-base sm:text-lg lg:text-xl text-gray-800">
                <strong>Child (0 to 5 years): </strong>{data.cost.child}
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-gray-800">
                <strong>Child (5 to 11 years): </strong>{data.cost.childDiscounted}
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-gray-800">
                <strong>Adult (11 years and above): </strong>{data.cost.adult}
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-gray-800">
                <strong>Group Discount: </strong>{data.cost.groupDiscount}
                </div>
            </div>
            </div>


        {/* Itinerary Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 sm:text-3xl lg:text-4xl">Itinerary</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-600 sm:text-2xl lg:text-3xl">
                Day 1 🥂
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {data.itinerary.day1?.map((item, index) => (
                  <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">
                    {item.time} - {item.activity}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 sm:text-2xl lg:text-3xl">
                Day 2 🌅
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {data.itinerary.day2?.map((item, index) => (
                  <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">
                    {item.time} - {item.activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Inclusions and Exclusions Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 sm:text-3xl lg:text-4xl">
            {data.inclusions.title}
            </h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.inclusions.items?.map((item, index) => (
              <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-red-600 mt-6 mb-4 sm:text-3xl lg:text-4xl">Exclusions ❌</h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.exclusions?.map((item, index) => (
              <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">{item}</li>
            ))}
          </ul>
        </div>

        {/* Food Menu Section */}
        <div className="mb-8 ">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 sm:text-3xl lg:text-4xl">Food Menu 🥗🍗</h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.foodMenu?.map((item, index) => (
              <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">{item}</li>
            ))}
          </ul>
        </div>

        {/* Booking Instructions Section */}
        {/* <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4 sm:text-3xl lg:text-4xl">Booking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            {data.bookingInstructions?.map((instruction, index) => (
              <li key={index} className="mb-2 text-base sm:text-lg lg:text-xl">{instruction}</li>
            ))}
          </ol>
          <div className="flex justify-center mt-6">
            <img
              src={qrcode}
              alt="QR Code"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-md shadow-lg transition-transform transform hover:scale-110"
            />
          </div>
        </div> */}
        <div className="mb-8">
  <h2 className="text-2xl font-bold text-blue-500 mb-4 sm:text-3xl lg:text-4xl">
    Booking Instructions
  </h2>
  <ol className="list-decimal list-inside text-gray-700 space-y-3">
    <li className="mb-2 text-base sm:text-lg lg:text-xl">
      To secure your reservation, kindly make a payment using the provided QR code.
    </li>
    <li className="mb-2 text-base sm:text-lg lg:text-xl">
      After completing the payment, please share a screenshot of the transaction with us via WhatsApp for verification.<a href="https://wa.me/9011939191" target="_blank" className="text-blue-600 hover:underline">Click Here to Send Screenshot to WhatsApp</a>
    </li>
    <li className="mb-2 text-base sm:text-lg lg:text-xl">
      Upon confirmation of your payment, we will send you a confirmation message on WhatsApp along with a Google Form to gather additional details.
    </li>
  </ol>
  <div className="flex justify-center mt-6">
    <img
      src={qrcode}
      alt="QR Code"
      className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-md shadow-lg transition-transform transform hover:scale-110"
    />
  </div>
</div>


        {/* Links Section */}
        <div className="mb-6 text-center">
          <a
            href="/cancellation-policy"
            className="text-blue-600 hover:text-blue-800 hover:underline text-base sm:text-lg lg:text-xl"
          >
            Cancellation Policy
          </a>
        </div>

        {/* Additional Text */}
        <div className="mt-6 text-center text-gray-700">
          <p className="text-base sm:text-lg lg:text-xl">
            If you have any questions or require further assistance, please do not hesitate to contact us.
          </p>
        </div>

        <div className="mt-4 text-center text-gray-700">
          <p className="text-base sm:text-lg lg:text-xl">Don't miss out on this amazing experience!</p>
        </div>
      </div>  

  {/* Grid layout with responsive columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.imageUrls?.map((image, index) => (
      <div key={index} className="flex justify-center">
        {/* Image component */}
        <images
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    ))}
  </div>
</div>
  );
};

export default PackageInfo;

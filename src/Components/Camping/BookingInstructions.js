import React from 'react';
import qrcode from "../../Images/qr-code.jpg";

const BookingInstructions = () => {
  return (
    <div>
        <div>
      {/* Booking Instructions Title */}
      <h2 className="text-2xl font-bold text-blue-500 mb-4 sm:text-3xl lg:text-4xl text-center">
        Booking Instructions
      </h2>

      {/* Booking Instructions List */}
      <ol className="list-decimal list-inside text-gray-700 space-y-3">
        <li className="mb-2 text-base sm:text-lg lg:text-xl">
          To secure your reservation, kindly make a payment using the provided QR code. Check name(Sourabh Kharat) 
        </li>
        <li className="mb-2 text-base sm:text-lg lg:text-xl">
          After completing the payment, please share a screenshot of the transaction with us via WhatsApp for verification.
          <a
            href="https://wa.me/9011939191"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Click Here to Send Screenshot to WhatsApp
          </a>
        </li>
        <li className="mb-2 text-base sm:text-lg lg:text-xl">
          Upon confirmation of your payment, we will send you a confirmation message on WhatsApp along with a Google Form to gather additional details.
        </li>
      </ol>

      {/* QR Code Image */}
      <div className="flex justify-center mt-6">
        <img
          src={qrcode} // Ensure this path is correct based on your project structure
          alt="QR Code"
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-md shadow-lg transition-transform transform hover:scale-110"
        />
      </div>
    </div>
     <div className="mt-6 text-center">
     <a
       href="/cancellation-policy"
       className="text-blue-600 hover:text-blue-800 hover:underline text-base sm:text-lg lg:text-xl"
     >
       Cancellation Policy
     </a>
   </div>
   </div>
  );
};

export default BookingInstructions;

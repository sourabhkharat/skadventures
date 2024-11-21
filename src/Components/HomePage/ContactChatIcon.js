import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactChatIcon = () => {
  // Define phone and WhatsApp numbers
  const phoneNumber = "tel:+9011939191"; // Replace with your phone number
  const whatsappNumber = "https://wa.me/1234567890"; // Replace with your WhatsApp link

  return (
    <div className="fixed bottom-16 right-8 z-50 flex flex-col items-center space-y-1">
      {/* Phone Icon */}
      <a href={phoneNumber} target="_blank" rel="noopener noreferrer">
        <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
          <FaPhoneAlt size={25} />
        </div>
      </a>

      {/* WhatsApp Icon */}
      <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300">
          <FaWhatsapp size={25} />
        </div>
      </a>
    </div>
  );
};

export default ContactChatIcon;

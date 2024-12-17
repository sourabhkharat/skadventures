import React, { useState } from 'react';

const FAQ = ({ question, answer, index }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function for opening/closing FAQ answers
  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="border-b pb-4">
      {/* Button to expand/collapse the answer */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleAnswer(index)}
      >
        <h3 className="text-xl font-semibold text-purple-600 sm:text-l lg:text-xl">
          {question}
        </h3>
        <span className="text-lg font-bold">
          {expandedIndex === index ? '−' : '+'}
        </span>
      </div>
      {/* Conditionally show the answer */}
      {expandedIndex === index && (
        <p className="text-gray-800 text-base sm:text-lg lg:text-xl mt-2">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQ;

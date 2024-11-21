import React from 'react';

// Sample data for the cancellation policy
const cancellationPolicyData = [
  {
    condition: "75% Refund",
    description: "if notified via phone conversation 10 or more days prior to the event date."
  },
  {
    condition: "50% Refund",
    description: "if notified via phone conversation 7 days prior to the event date."
  },
  {
    condition: "No Refund",
    description: "if the cancellation requested is less than 5 days prior to the event date."
  },
  {
    condition: "Not Transferable",
    description: "Event Tickets cannot be transferred to another date against cancellation."
  },
  {
    condition: "Not Transferable",
    description: "Event Tickets cannot be transferred to another person against cancellation."
  },
  {
    condition: "Full Refund",
    description: "If the event gets cancelled from our side, we will refund you the whole amount."
  },
  {
    condition: "Same policy applies",
    description: "If the event is canceled due to any natural calamity, political unrest, or other such reasons beyond our control."
  }
];

const CancellationPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Cancellation Policy</h2>
      <ul className="space-y-6">
        {cancellationPolicyData.map((item, index) => (
          <li key={index} className="flex items-start bg-blue-50 p-4 rounded-lg shadow border border-blue-300">
            <span className="text-lg font-semibold mr-4 text-blue-800">{item.condition}:</span>
            <p className="text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-gray-600 text-center text-sm">
        Please contact us for any questions regarding our cancellation policy.
      </p>
    </div>
  );
};

export default CancellationPolicy;

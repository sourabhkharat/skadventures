// import React, { useEffect } from 'react';


// Sample data for terms and conditions
const termsData = [
  "We are not selling any kind of alcohol at our campsite. You can carry your own alcohol along with a proper 1-day permit issued from the liquor shop.",
  "Make sure not to consume excessive alcohol. If anyone is found disturbing others' privacy, that person will be immediately or forcefully removed from the campsite.",
  "Boating and Kayaking are not included in the package.",
  "Once you set up your tent in the campsite, you can’t shift it.",
  "Please carry your medicines and other essential items.",
  "We are not responsible for any physical health or property loss.",
  "You can participate at your own risk.",
  "Damages to campsite property will be charged to the guest.",
  "The campsite is not responsible for loss, theft, or damage to personal property.",
  "No refunds or credits will be issued due to weather or government-related inconveniences."
];

// Sample data for important notes
const notesData = [
  "When you reach the campsite, find the right place to stay – either a tent, triangle-shaped or rooms. Check if there are bedsheets and blankets, but remember, we don't provide pillows for the tents. If they're not available, please contact our coordinator.",
  "For a delicious and hot BBQ, make sure to follow the timelines to enjoy tasty food. If you are not aware of the time, ask coordinators.",
  "No individual mineral water bottles will be provided, but there will be mineral water jars available for your use.",
  "BBQ and snacks are limited, so please don't ask for more as we have a limited supply.",
  "Consider bringing your power bank so you can enjoy more time with friends and family at the campsite, rather than waiting by the charging board.",
  "We provide blankets, but they might be thin. Since it’s winter, bringing your own blanket for extra warmth is a good idea.",
  "Bring winter essentials such as sweaters, jackets, shawls, scarves, gloves and socks for the cold weather.",
  "Bring Odomos to protect yourself from mosquito bites. It’s a precautionary measure for your safety.",
  "Tissue papers will not be provided, so please remember to bring your own."
];

const TermsCondition = () => {
  // useEffect(() => {
  //   // Scroll to the top of the page when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="max-w-3xl mx-auto p-8 bg-light-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Terms and Conditions</h2>
      <ul className="space-y-4 mb-8">
        {termsData.map((item, index) => (
          <li key={index} className="bg-blue-50 p-4 rounded-lg shadow border border-blue-300">
            <p className="text-gray-700">{item}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Important Notes to Remember</h2>
      <ul className="space-y-4 mb-8">
        {notesData.map((item, index) => (
          <li key={index} className="bg-blue-50 p-4 rounded-lg shadow border border-blue-300">
            <p className="text-gray-700">{item}</p>
          </li>
        ))}
      </ul>

      <p className="text-center text-blue-600 mt-4">
        Don't hesitate to contact us if you have any questions.
      </p>
    </div>
  );
};

export default TermsCondition;

import React from "react";
import qrcode from "../../Images/qr-code.jpg";
import camping from "../../Images/camping.jpg";
import ProductCard from "../PackageInfo/ProductCard";
import ImageCardsWithVerticalView from "../PackageInfo/ImageCardsWithverticalView";
import triangle1 from "../../../src/Images/pawana/TriangleStay/1.jpg"
import triangle2 from "../../../src/Images/pawana/TriangleStay/2.jpg"
import triangle3 from "../../../src/Images/pawana/TriangleStay/3.jpg"
import triangle4 from "../../../src/Images/pawana/TriangleStay/tlights.jpg"
import triangle5 from "../../../src/Images/pawana/TriangleStay/5.jpg"
import room1 from "../../../src/Images/pawana/RoomStay/1.jpg"
import room2 from "../../../src/Images/pawana/RoomStay/2.jpg"
import room3 from "../../../src/Images/pawana/RoomStay/3.jpg"
import room4 from "../../../src/Images/pawana/RoomStay/4.jpg"
import tent1 from "../../../src/Images/pawana/TentStay/tnt1.jpg"
import tent2 from "../../../src/Images/pawana/TentStay/tnt2.jpg"
import tent3 from "../../../src/Images/pawana/TentStay/tnt3.jpg"
// import tent4 from "../../../src/Images/pawana/TentStay/tnt4.jpg"
// import tent5 from "../../../src/Images/pawana/tnt5.jpg"
import cmn1 from "../../../src/Images/pawana/cmn1.jpg"
import cmn2 from "../../../src/Images/pawana/cmn2.jpg"
import cmn3 from "../../../src/Images/pawana/cmn3.jpg"
import cmn4 from "../../../src/Images/pawana/cmn4.jpg"
import cmn5 from "../../../src/Images/pawana/cmn5.JPG"
import cmn6 from "../../../src/Images/pawana/cmn6.JPG"
import cmn7 from "../../../src/Images/pawana/cmn7.jpg"
import cmn8 from "../../../src/Images/pawana/cmn8.jpg"
// import cmn9 from "../../../src/Images/pawana/cmn9.jpg"
import cmn10 from "../../../src/Images/pawana/cmn10.jpg"
import cmn11 from "../../../src/Images/pawana/cmn11.jpg"
import cmn12 from "../../../src/Images/pawana/cmn12.JPG"

const PawanaNewYearCamping = () => {
  const data = {
    title: "New Year Party 2025 at Pawna",
    tagline: "Countdown to an extraordinary New Year at Pawna Camping!",
    description: `
      Immerse yourself in the rhythm of our DJ system, witness a dazzling firecracker show,
      savor the joy of cake cutting, and treat your taste buds to delightful ice cream.
      Join us for a night of celebration under the stars, creating memories that will last a lifetime.
      Don’t miss the magic – reserve your spot now and welcome the New Year in style at Pawna Camping!
    `,
    cost: {
      child: "Free (0 to 5 years)",
      childDiscounted: "50% of Adult price",
      adult: "As Mentioned Above",
      groupDiscount: "Special Group Discount available up to 20%",
    },
    itinerary: {
      day1: [
        { time: "04:00 pm", activity: "Check In" },
        { time: "04:30 pm to 06:00 pm", activity: "Games & Activities" },
        { time: "06:00 pm to 07:00 pm", activity: "Evening Tea with Snacks" },
        { time: "07:30 pm to 09:00 pm", activity: "BBQ (Veg & Non-Veg Limited)" },
        { time: "06:00 pm to 12:00 am", activity: "Live DJ Music" },
        { time: "10:00 pm to 11:00 pm", activity: "Dinner (Veg & Non-Veg Unlimited) & Ice Cream" },
        { time: "12:00 am", activity: "Celebration with Firecrackers & Cake Cutting" },
        { time: "12:00 am to 01:00 am", activity: "Live Guitar Music" },
      ],
      day2: [
        { time: "07:00 am to 08:00 am", activity: "Sunrise View for Early Risers" },
        { time: "08:00 am to 09:00 am", activity: "Morning Tea with Breakfast" },
        { time: "09:00 am to 10:00 am", activity: "Enjoy Watersports (Boating & Kayaking)" },
        { time: "11:30 am", activity: "Check Out with Sweet & Lovable Memories…" },
      ],
    },
    inclusions: {
      title: "Inclusions ✅",
      items: [
        "Evening Tea & Snacks and Morning Breakfast",
        "Live DJ Music",
        "Live Music & Bonfire",
        "Limited BBQ (Veg/non-Veg)",
        "Unlimited Dinner (Veg/Non-Veg)",
        "Fire Crackers and Cake Cutting",
        "Ice cream or welcome drink",
        "Tent stays on sharing basis with mat and blanket",
        "First Aid kit",
        "Indoor games (Chess, Carrom, Cards)",
        "Outdoor games (Cricket, Badminton, Archery, Volleyball)",
      ],
    },
    exclusions: {
      title: "Exclusions ❌",
      items: [
        "Any transportation",
        "Extra Meals / Drinks Ordered",
        "Insurance, tips, Porters, bottled mineral water, aerated drinks, etc.",
        "Any personal expenses",
        "Boating & Kayaking",
        "Expenses due to unforeseen circumstances",
        "Medical / Emergency evacuations if required",
        "Any cost not mentioned above",
      ],
    },
    foodMenu: [
      "Evening Snacks: Tea & Misal Pav (Limited)",
      "Veg: Mix Veg or Paneer Sabji, Dal Tadka, Chapati, Steamed Rice, Sweet Dish, Papad, Salad (Unlimited)",
      "BBQ (Limited): Chicken Fry, Paneer BBQ",
      "Non-Veg: Chicken Curry, Chapati, Rice, Salad (Unlimited)",
      "Breakfast: Tea & Pohe (Limited)",
    ],
    productData:[
        {
          title: 'Tent Stay',
          images: [
            tent1,tent2,tent3,
          ],
          price: 2499,
        },
        {
          title: 'Triangle/pod',
          images: [
            triangle4,triangle1,triangle2,triangle3,triangle5,
          ],
          price: 3499,
        },
        {
          title: 'Cottage',
          images: [
            
            room4,room1,room2,room3,
          ],
          price: 3499,
        },
      ],
      imageUrls:[
        triangle1,triangle2,triangle3,
      ],
      verticalCards:[
        { title: 'Card 4', image: cmn1 },
        { title: 'Card 10', image: cmn10 },
        { title: 'Card 11', image: cmn11 },
        { title: 'Card 6', image: cmn6 },
        { title: 'Card 12', image: cmn12 },
        { title: 'Card 1', image: cmn2 },
        { title: 'Card 2', image: cmn3 },
        { title: 'Card 3', image: cmn4 },
        { title: 'Card 5', image: cmn5},
        { title: 'Card 7', image: cmn7 },
        { title: 'Card 8', image: cmn8 },
        // { title: 'Card 9', image: cmn9 },      
      ],
      faq: [
        {
          question: "How to reach Pawna lake Camping?",
          answer: "You can quickly drive to the campsite we provide parking space. Camping is well connected by the national highway a few hours drives from Mumbai, Pune, Lonavala. We’ll provide you with google maps directions after you complete the booking. People using public transport you can get down at Lonavala or Kamshet railway station. From here, jeeps are available on a private rental basis till Pawna Lake Pune. You can also hop on sharing vehicles from Kamshet to Pawna campsite."
        },
        {
          question: "What are the activities available at Pawna Lake Camping?",
          answer: "Below are activities not included in the camping package; these are available near Pawna lake Camping: Paragliding at Pawna, Water sports at Pawna, Lohgad Fort Pune Trek, Visapur Fort Trek, Tung Fort Trek, Tikona Fort Trek, Kamshet Paragliding, Rajmachi fort Trek."
        },
        {
          question: "Can we charge our phones and gadgets inside the tents?",
          answer: "Electricity is available at Pawna Lake Camping, with limited slots. We recommend you carry your power bank. You can spend more time with your friends and family rather than standing next to the charging board."
        },
      ],
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center py-12 px-6 sm:px-12 lg:px-16"
      style={{ backgroundImage: `url(${camping})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 max-w-full sm:max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 sm:text-4xl lg:text-5xl">
          {data.title}
        </h1>
        <p className="text-xl text-center text-red-700 mb-6">{data.tagline}</p>
        <p className="text-base sm:text-lg lg:text-xl text-center mb-8">{data.description}</p>

        {/* Product Cards */}
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
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 sm:text-3xl lg:text-4xl">Cost Information 💰</h2>
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


        {/* Itinerary */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 sm:text-3xl lg:text-4xl">Itinerary</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-600 sm:text-2xl lg:text-3xl">Day 1 🥂</h3>
              <ul className="list-disc pl-5 space-y-2">
                {data.itinerary.day1?.map((item, index) => (
                  <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">
                    {item.time} - {item.activity}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 sm:text-2xl lg:text-3xl">Day 2 🌅</h3>
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

        {/* Inclusions and Exclusions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 sm:text-3xl lg:text-4xl">
            {data.inclusions.title}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.inclusions.items?.map((item, index) => (
              <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-red-600 mt-6 mb-4 sm:text-3xl lg:text-4xl">Exclusions ❌</h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.exclusions.items?.map((item, index) => (
              <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Food Menu Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 sm:text-3xl lg:text-4xl">
            Food Menu 🥗🍗
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.foodMenu?.map((item, index) => (
              <li key={index} className="text-gray-800 text-base sm:text-lg lg:text-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Booking Instructions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4 sm:text-3xl lg:text-4xl">
            Booking Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li className="mb-2 text-base sm:text-lg lg:text-xl">
              To secure your reservation, kindly make a payment using the provided QR code.
            </li>
            <li className="mb-2 text-base sm:text-lg lg:text-xl">
              After completing the payment, please share a screenshot of the transaction with us via WhatsApp for verification.
              <a
                href="https://wa.me/9011939191"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Click Here to Send Screenshot to WhatsApp
              </a>
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
        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 sm:text-3xl lg:text-4xl">Frequently Asked Questions (FAQ's)</h2>
          <div className="space-y-6">
            {data.faq.map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-purple-600 sm:text-2xl lg:text-2xl">{faq.question}</h3>
                <p className="text-gray-800 text-base sm:text-lg lg:text-xl">{faq.answer}</p>
              </div>
            ))}
          </div>
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
    </div>
  );
};

export default PawanaNewYearCamping;

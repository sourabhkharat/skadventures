import React from "react";
// import qrcode from "../../Images/qr-code.jpg";
import camping from "../../Images/camping.jpg";
import ProductCard from "../PackageInfo/ProductCard";
import ImageCardsWithVerticalView from "../PackageInfo/ImageCardsWithverticalView";
import FAQ from "./Faq";
import BookingInstructions from "./BookingInstructions";

import tnt1 from "../../../src/Images/Panshet/TentStay/tnt1.jpg"
import tnt2 from "../../../src/Images/Panshet/TentStay/tnt2.JPG"
import tnt3 from "../../../src/Images/Panshet/TentStay/tnt3.jpg"
import tnt4 from "../../../src/Images/Panshet/TentStay/tnt4.jpg"

import cbn1 from "../../../src/Images/Panshet/CozyCabin/cbn1.JPG"
import cbn2 from "../../../src/Images/Panshet/CozyCabin/cbn2.JPG"
import cbn3 from "../../../src/Images/Panshet/CozyCabin/cbn3.JPG"
import cbn4 from "../../../src/Images/Panshet/CozyCabin/cbn4.JPG"
import cbn5 from "../../../src/Images/Panshet/CozyCabin/cbn5.jpg"

import ctg1 from "../../../src/Images/Panshet/RoomStay/ctg1.JPG"
import ctg2 from "../../../src/Images/Panshet/RoomStay/ctg2.JPG"
// import ctg3 from "../../../src/Images/Panshet/RoomStay/ctg3.JPG"
// import ctg4 from "../../../src/Images/Panshet/RoomStay/ctg4.JPG"
// import ctg5 from "../../../src/Images/Panshet/RoomStay/ctg5.jpg"


import cmn1 from "../../../src/Images/Panshet/cmn1.JPG"
import cmn2 from "../../../src/Images/Panshet/cmn2.JPG"
import cmn3 from "../../../src/Images/Panshet/cmn3.JPG"
import cmn4 from "../../../src/Images/Panshet/cmn4.JPG"
import cmn5 from "../../../src/Images/Panshet/cmn5.JPG"
import cmn6 from "../../../src/Images/Panshet/cmn6.JPG"
import cmn7 from "../../../src/Images/Panshet/cmn7.JPG"
import cmn8 from "../../../src/Images/Panshet/cmn8.JPG"
import cmn9 from "../../../src/Images/Panshet/cmn9.jpg"
import cmn10 from "../../../src/Images/Panshet/cmn10.jpg"
// import cmn10 from "../../../src/Images/Panshet/cmn10.jpg"
// import cmn10 from "../../../src/Images/Panshet/cmn10.jpg"

const PanshetNewYearCamping = () => {
  const data = {
    title: "New Year Party 2025 at Panshet",
    tagline: "Experience an unforgettable New Year's Eve at Panshet Camping!",
    description: `
      Get ready to groove to the beats of our DJ system, marvel at the grandest firecracker display ever, 
      and indulge in the excitement of a cake-cutting celebration. Join us for a night under the stars, 
      creating memories that will stay with you forever. Don't miss out on the enchantment – secure your spot now!
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
        { time: "07:00 pm to 12:00 am", activity: "Live DJ Music" },
        { time: "10:00 pm to 11:00 pm", activity: "Dinner (Veg & Non-Veg Unlimited)" },
        { time: "12:00 am", activity: "Firecrackers Show & Cake Cutting" },
        { time: "12:00 am to 02:00 am", activity: "Live Guitar Music" },
      ],
      day2: [
        { time: "07:00 am to 08:00 am", activity: "Sunrise View for Early Risers" },
        { time: "08:00 am to 09:00 am", activity: "Morning Tea with Breakfast" },
        { time: "11:30 am", activity: "Check Out with Sweet & Lovable Memories…" },
      ],
    },
    inclusions: {
      title: "Inclusions ✅",
      items: [
        "Evening Tea & Snacks and Morning Breakfast",
        "Live DJ Music",
        "Live Music & Bonfire",
        "Limited BBQ (Veg/Non-Veg)",
        "Unlimited Dinner (Veg/Non-Veg)",
        "Fire Crackers and Cake Cutting",
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
        "Extra Meals/Drinks Ordered",
        "Insurance, tips, Porters, bottled mineral water, aerated drinks, etc.",
        "Any personal expenses",
        "Boating & Kayaking",
        "Expenses due to unforeseen circumstances",
        "Medical/Emergency evacuations",
        "Any cost not mentioned above",
      ],
    },
    foodMenu: [
      "Evening Snacks: Tea & Pav Bhaji (Limited)",
      "Veg: Mix Veg or Paneer Sabji, Dal Tadka, Chapati, Steamed Rice, Sweet Dish, Papad, Salad (Unlimited)",
      "BBQ (Limited): Chicken Fry, Paneer BBQ",
      "Non-Veg: Chicken Curry, Chapati, Rice, Salad (Unlimited)",
      "Breakfast: Tea & Pohe (Limited)",
    ],
    productData:[
        {
          title: 'Tent Stay',
          images: [
            tnt4,tnt1,tnt2,tnt3,
          ],
          price: 2499,
        },
        {
          title: 'Cozy Cabin',
          images: [
            cbn4,cbn1,cbn2,cbn3,cbn5,
          ],
          price: 3499,
        },
        {
          title: 'Cottage',
          images: [
            ctg1,ctg2,
          ],
          price: 3499,
        },
      ],
      // imageUrls:[
      //   triangle1,triangle2,triangle3,
      // ],
      verticalCards:[
        { title: 'Card 9', image: cmn9 },
        { title: 'Card 10', image: cmn10 },
        { title: 'Card 4', image: cmn4 },
        { title: 'Card 2', image: cmn2 },
        { title: 'Card 3', image: cmn3 },
        { title: 'Card 5', image: cmn5 },
        { title: 'Card 6', image: cmn6 },
        { title: 'Card 7', image: cmn7 },
        { title: 'Card 1', image: cmn1 },
        { title: 'Card 8', image: cmn8 },       
      ],
      faq: [
        {
          "question": "How to reach Panshet lake Camping?",
          "answer": "You can quickly drive to the campsite we provide parking space. We’ll provide you with google maps directions after you complete the booking. People using public transport you can get State Transport (ST) Bus is there from Swargate to Panshet at 8.30 am & 11.30 am. From Panshet to Swargate ST Bus is at 11 am & 2 pm. You can go upto Khanapur by PMT from Swargate. From Khanapur to Panshet & vice versa there are frequent jeeps for local trips. Note - Please check for latest timings & frequency of ST bus from Swargate ST stand and PMT/PMC bus to Khanpur."
        },
        {
          "question": "What are the activities available at Panshet Lake Camping?",
          "answer": "Below are activities not included in the camping package: Khadakwasla Dam, Sinhgad Fort, Panshet Water Park, Lavasa city, Neelkantheshwar, Torna Fort, Temghar Dam."
        },
        {
          "question": "Can we charge our phones and gadgets inside the tents?",
          "answer": "Electricity is available at Camping, with limited slots. We recommend you carry your power bank. You can spend more time with your friends and family rather than standing next to the charging board."
        },
        {
          "question": "Tell me about Panshet camping?",
          "answer": "Panshet is undoubtedly one of the best picnic spots in Maharashtra and is known for its scenic surroundings and a serene yet resonating vibe. Situated on the outskirts of Pune city, about 50 km to its South, Panshet is home to lush greenery, gushing waterfalls, and mountains. It is known for its unparalleled natural beauty and an absolutely enthralling ambiance. Having said that, backpacking to Panshet is around the corner!"
        },
        {
          question: "What is Panshet Lake Camping?",
          answer: "Panshet Lake Camping is a serene camping experience located near Panshet Lake, offering a beautiful natural setting for outdoor activities such as boating, trekking, and stargazing. It's a perfect getaway for nature lovers and adventure seekers."
        },
        {
          question: "Where is Panshet Lake located?",
          answer: "Panshet Lake is located around 35 km southwest of Pune, Maharashtra. It is situated on the Panshet Dam, surrounded by lush hills and scenic landscapes, making it a popular destination for nature lovers and adventure enthusiasts."
        },
        {
          question: "What activities are available during Panshet Lake Camping?",
          answer: "During your camping stay at Panshet Lake, you can enjoy a range of activities including boating on the lake, trekking through the nearby hills, fishing, cycling, and relaxing by the water. You can also enjoy campfires, BBQs, and stargazing at night."
        },
        {
          question: "What should I bring for camping at Panshet Lake?",
          answer: "We provide tents, sleeping bags, and other camping essentials. However, it is recommended to bring comfortable clothing, toiletries, a torch, sunscreen, insect repellent, and a camera. If you plan to swim or boat, bring swimwear as well."
        },
        {
          question: "Is food provided during the camping trip?",
          answer: "Yes, food is provided during your stay. We serve freshly cooked meals including breakfast, snacks, and dinner. Vegetarian and non-vegetarian options are available, and we also offer BBQ snacks and campfire treats in the evening."
        },
        {
          question: "Are pets allowed at Panshet Lake Camping?",
          answer: "Yes, pets are allowed at Panshet Lake Camping! We welcome your furry friends, but please ensure they are kept on a leash and under control at all times. Please clean up after them and ensure their comfort during the trip."
        },
        {
          question: "Is it safe for families and children?",
          answer: "Yes, Panshet Lake Camping is a family-friendly destination. The campsite is safe for children, and there are several activities suitable for all age groups, including gentle boat rides and nature walks. Our staff ensures the safety of all guests during activities."
        },
        {
          question: "How do I book a spot for Panshet Lake Camping?",
          answer: "Booking a spot is easy! You can reserve your camping spot through our website or by contacting us directly via phone or whatsapp. We recommend booking in advance, especially on weekends and public holidays, as availability may be limited."
        },
        {
          question: "What is the best time to visit Panshet Lake Camping?",
          answer: "The best time to visit Panshet Lake is from October to March when the weather is pleasant and cool. The monsoon season (June to September) offers lush green landscapes, but it may also bring heavy rains that could affect outdoor activities."
        },
        {
          question: "Do you offer transportation to the campsite?",
          answer: "Transportation is not provided by the campsite, but we can assist you in arranging transportation from Pune or nearby cities. Alternatively, you can drive to the campsite in your own vehicle, and we will provide directions."
        },
        {
          question: "Can I cancel my booking for Panshet Lake Camping?",
          answer: "Yes, you can cancel your booking. Please refer to our cancellation policy on the website for more details. We typically offer a partial refund if the cancellation is made within a certain time frame before the scheduled date."
        },
        {
          question: "Is there any mobile network coverage at Panshet Lake?",
          answer: "Mobile network coverage can be limited around Panshet Lake due to its remote location. It’s recommended to inform your family or friends before leaving, and be prepared to disconnect from your devices and enjoy the camping experience."
        },
        {
          question: "Are there any medical facilities available at the campsite?",
          answer: "While there are no immediate medical facilities on-site, our staff is trained in basic first aid. In case of an emergency, we can assist you in reaching the nearest hospital or clinic in the nearby town of Pune."
        },
      ]
      
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
            <div className="mb-8">
            <BookingInstructions/>
            </div>
        {/* Booking Instructions */}
        {/* <div className="mb-8">
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
                rel="noopener noreferrer"
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
        </div> */}

        {/* Links Section */}
        {/* <div className="mb-6 text-center">
          <a
            href="/cancellation-policy"
            className="text-blue-600 hover:text-blue-800 hover:underline text-base sm:text-lg lg:text-xl"
          >
            Cancellation Policy
          </a>
        </div> */}

        {/* FAQ Section */}
        <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 sm:text-3xl lg:text-4xl">
        Frequently Asked Questions (FAQ's)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2 mb-12">
        {/* Loop over the FAQ data and pass each faq item as props to the FAQ component */}
        {data.faq?.map((faq, index) => (
          <FAQ
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
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

export default PanshetNewYearCamping;

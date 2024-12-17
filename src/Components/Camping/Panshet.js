import React, { useState, useEffect } from 'react';
import PackageInfo from '../PackageInfo/PackageInfo';
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

const PanshetCamping = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchedData = {
      itinerary: {
        camping: "Panshet Camping",
        day1: [
          { time: "04:00 pm", activity: "Check In" },
          { time: "04:30 pm to 06:00 pm", activity: "Games & Activities" },
          { time: "06:00 pm to 07:00 pm", activity: "Evening Tea with Snacks" },
          { time: "07:30 pm to 09:00 pm", activity: "BBQ (Veg & Non-Veg Limited)" },
          { time: "08:00 pm to 10:00 am", activity: "Live DJ Music" },
          { time: "10:00 pm to 11:00 pm", activity: "Dinner (Veg & Non-Veg Unlimited)" },
          { time: "12:00 am to 02:00 am", activity: "Live Guitar Music" },
        ],
        day2: [
          { time: "07:00 am to 08:00 am", activity: "Sunrise View for early risers" },
          { time: "08:00 am to 09:00 am", activity: "Morning tea with Breakfast" },
          { time: "11:30 am", activity: "Check Out with Sweet & Lovable Memories…!!!" },
        ],
      },
      title: "New Year Party 2024 at Pawna Lake",
    tagline: "Escape to Panshet Lake for a Perfect Getaway!",
    description: `Escape to the peaceful beauty of Panshet Lake, just 50 km from Pune. Nestled in lush greenery and surrounded by hills, Panshet is the perfect spot to relax, unwind, and reconnect with nature. Enjoy cozy tents, delicious meals, and stunning views of the lake. Whether you're here for relaxation or adventure, Panshet Camping offers a memorable experience for friends, family, and couples alike. Book your stay today and experience the magic of Panshet!
    `,
    cost: {
      child: "Free (0 to 5 years)",
      childDiscounted: "50% of Adult price",
      adult: "As Mentioned Above",
      groupDiscount: "Special Group Discount available up to 20%",
    },
      inclusions: {
        title:"Inclusions ✅",
        items:[
        "Evening Tea & Snacks and Morning Breakfast",
        "Live DJ Music",
        "Live Music & Bonfire",
        "Limited BBQ (Veg/Non-Veg)",
        "Unlimited dinner (Veg/Non-veg)",
        "Tent stays on 2 sharing basis with mat and blanket",
        "First Aid kit",
        "Indoor games (Chess, Carrom, Cards)",
        "Outdoor games (Cricket, badminton, Archery, Volleyball)",
      ]},
      exclusions: [
        "Any transportation",
        "All kinds of Extra Meals / Drinks Ordered",
        "Insurance, tips, Porters, bottled mineral water, aerated drinks, etc.",
        "Any kind of personal expenses",
        "Boating & Kayaking",
        "All expenses incurred due to unforeseen and unavoidable circumstances like roadblocks, bad weather",
        "Any medical / Emergency evacuations if required",
        "Any kind of cost, which is not mentioned in the cost includes above",
      ],
      foodMenu: [
        "Evening Snacks: Tea & Pav bhaji (Limited)",
        "Veg: Mix Veg or Paneer sabzi, Dal Tadka, Chapati, steamed Rice, Sweet Dish, Papad, Salad (Unlimited)",
        "BBQ (Limited)",
        "Non-Veg: Chicken Fry, Chicken Curry, Chapati, Rice, Salad (Unlimited)",
        "Breakfast: Tea & Pohe (Limited)",
      ],
      bookingInstructions: [
        "To secure your reservation, kindly make a payment using the provided QR code.",
        "After completing the payment, please share a screenshot of the transaction with us via WhatsApp for verification.",
        "Upon confirmation of your payment, we will send you a confirmation message on WhatsApp along with a Google Form to gather additional details.",
      ],
      productData:[
        {
          title: 'Tent Stay',
          images: [
            tnt4,tnt1,tnt2,tnt3,
          ],
          price: 999,
        },
        {
          title: 'Cozy Cabin',
          images: [
            cbn4,cbn1,cbn2,cbn3,cbn5,
          ],
          price: 1499,
        },
        {
          title: 'Cottage',
          images: [
            ctg1,ctg2,
          ],
          price: 1999,
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
    

    setData(fetchedData);
  }, []);

  return (
    <div>
      {data ? (
        <PackageInfo data={data} />
      ) : (
        <div className="text-red-600">Loading data...</div>
      )}
    </div>
  );
};

export default PanshetCamping;

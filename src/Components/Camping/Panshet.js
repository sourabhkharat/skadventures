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
          { time: "07:00 pm to 10:00 am", activity: "Live DJ Music" },
          { time: "10:00 pm to 11:00 pm", activity: "Dinner (Veg & Non-Veg Unlimited)" },
          { time: "12:00 am", activity: "Firecrackers show and Cake cutting" },
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

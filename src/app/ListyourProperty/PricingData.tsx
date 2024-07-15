import React from "react";
import Pricing from "./Pricing";

const pricingData = [
  {
    type: "Action Plan",
    price: "$59",
    subscription: "year",
    description: "Perfect for using in a personal website or a client project.",
    buttonText: "Know More",
    features: [
       "  12 Months Listing",
       "  Personal Account Manager",
         "34 HD photograph",
        " Unlimited Description",
        " Upload Property Video",
        " Social Media Marketing",
        " 2 Promotion Reports (1 Per 6 Months)",
       "  10 booking inquires",
        " 3 reservations guaranteed (Each Booking Of 1 to 3 Weeks)",
        
    ],
  },
  {
    type: "Game Plan",
    price: "$199",
    subscription: "year",
    description: "Perfect for using in a personal website or a client project.",
    buttonText: "Know More",
    // active: true,
    features: [
        " 12 Months Listing",
        " Personal Account Manager",
        " 34 HD photograph",
        " Unlimited Description",
         "Upload Property Video",
        " Social Media Marketing",
        " 2 Promotion Reports (1 Per 6 Months)",
        " 10 booking inquires",
        " 3 reservations guaranteed (Each Booking Of 1 to 3 Weeks)",
  
    ],
  },
  {
    type: "Master Plan",
    price: "$256",
    subscription: "year",
    description: "Perfect for using in a personal website or a client project.",
    buttonText: "Know More",
    features: [
        " 24 Months Listing",
        "2 Personal Account Manager",
        "Unlimited HD photograph",
        " Unlimited Description",
        " Upload Property Video",
        " Social Media Marketing",
        " 6 Promotion Reports (1 per 3 Months)",
        " 15 booking inquires",
        " 5 reservations guaranteed (Each Booking Of 1 to 3 Weeks)",
  
    ],
  },
];

const PricingPage: React.FC = () => {
  return <Pricing data={pricingData} />;
};

export default PricingPage;

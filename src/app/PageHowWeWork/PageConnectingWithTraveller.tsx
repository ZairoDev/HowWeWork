import React from "react";
import Image from "next/image";
import connectingImg from "../../../public/images/c.png";

const PageConnectingWithTraveller: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side with content */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
          Connecting with the travellers
        </h2>
        <p className="text-justify mt-4 md:mt-6">
          These days online bookings are usual as the travelers find it much
          easier to book apartments/rooms of their choice according to their
          convenience and budget. There are two basic ways in which one can make
          an online reservation, either by booking direct with hotels or by
          booking through Online Travel Agencies (OTAs). Vacation Saga is a
          platform through which travelers are connected to the properties of
          their choice as we provide apartment/room pictures, besides other
          details like best offers, prices, climate detection, nearby
          destinations, etc. So all these details make it a lot easier for our
          travelers to select the best space according to their needs.
        </p>
      </div>

      {/* Right side with image */}
      <div className="w-full md:w-1/2">
        <Image src={connectingImg} alt="Connecting_img" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default PageConnectingWithTraveller;

// // import Image from "next/image";
// import PageProfessionalListing from "./PageHowWeWork/PageProfessionalListing";
// import PageOurServices from "./PageHowWeWork/PageOurServices";
// // import PageConnectingWithTraveller from "./PageHowWeWork/PageConnectingWithTraveller";
// import PageFeatureListing from "./PageHowWeWork/PageFeatureListing"
// import PageSectionClient from "./PageHowWeWork/PageSectionClient"
// import KnowUsBetter from "./PageHowWeWork/KnowUsBetter";
// import BannerImage from "./PageHowWeWork/BannerImage";
// export default function Home() {
//   return (
//    <div className="flex flex-col justify-center items-center p-8 md:p-20 space-y-12">
//     {/* here i import files  */}
//     <PageProfessionalListing/>
//     <BannerImage/>
//     <PageOurServices/>
//     {/* <PageConnectingWithTraveller/> */}
//     <PageFeatureListing/>
//     <KnowUsBetter/>
//     <PageSectionClient/>
//    </div>
//   );
// }

import React from "react";
import MainPage from "./PageHowWeWork/MainPage";
import PricingPage from "./ListyourProperty/PricingData";
const Page: React.FC = () => {
  return (
    <>
     
      {/* <MainPage /> */}
      <div className="flex flex-col ">
      <PricingPage/>

      </div>
    </>
  );
};

export default Page;

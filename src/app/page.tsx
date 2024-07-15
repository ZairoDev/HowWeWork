// import Image from "next/image";
import PageProfessionalListing from "./PageHowWeWork/PageProfessionalListing";
import PageOurServices from "./PageHowWeWork/PageOurServices";
// import PageConnectingWithTraveller from "./PageHowWeWork/PageConnectingWithTraveller";
import PageFeatureListing from "./PageHowWeWork/PageFeatureListing"
import PageSectionClient from "./PageHowWeWork/PageSectionClient"
import KnowUsBetter from "./PageHowWeWork/KnowUsBetter";
import BannerImage from "./PageHowWeWork/BannerImage";
// import PageClientCustome from "./PageHowWeWork/PageClientCustome";
export default function Home() {
  return (
   <div className="flex flex-col justify-center items-center p-8 md:p-20 space-y-12">
    {/* here i import files  */}
    <PageProfessionalListing/>
    <BannerImage/>
    <PageOurServices/>
    {/* <PageConnectingWithTraveller/> */}
    <PageFeatureListing/>
    <KnowUsBetter/>
    <PageSectionClient/>
    {/* <PageClientCustome/> */}
   </div>
  );
}

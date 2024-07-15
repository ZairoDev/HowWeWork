// import Image from "next/image";
import PageProfessionalListing from "./PageProfessionalListing";
import PageOurServices from "./PageOurServices";
// import PageConnectingWithTraveller from "./PageHowWeWork/PageConnectingWithTraveller";
import PageFeatureListing from "./PageFeatureListing"
import PageSectionClient from "./PageSectionClient"
import KnowUsBetter from "./KnowUsBetter";
import BannerImage from "./BannerImage";
import Head from "next/head"
export default function Home() {
  return (

    <>
    <Head>
        <title>Next.js TypeScript Page</title>
        <meta name="description" content="Next.js TypeScript Page Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <div className="flex flex-col justify-center items-center p-8 md:p-20 space-y-12">
    {/* here i import files  */}
    <PageProfessionalListing/>
    <BannerImage/>
    <PageOurServices/>
    {/* <PageConnectingWithTraveller/> */}
    <PageFeatureListing/>
    <KnowUsBetter/>
    <PageSectionClient/>
   </div>
   </>
  );
}

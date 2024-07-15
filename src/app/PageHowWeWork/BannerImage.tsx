import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/images/c.png"

const BannerImage: React.FC = () => {
    return (
        <div className="flex flex-col w-full items-center  md:px-8 lg:px-16">
            <div className="w-full flex justify-center">
                <Image src={bannerImg} alt="banner_img" width={1100} height={1000} className="w-full h-auto max-w-screen-lg" />
            </div>
            <div className="mt-6 max-w-screen-lg">
                <p className="text-base md:text-lg lg:text-xl text-justify">
                    We answer in real time to the questions that are posted by the viewers. We encourage our ultimate consumers to review holiday experiences on our facebook page and Google business profile so that everyone can see how well we have served our clients in the past.
                    We share our posts on the wall of the clients home page which we are advertising so that clients are able to see the type of marketing we are initiating. Your advert will be online and ready to receive bookings in minutes. We advertise property with fresh information and update them frequently. Our adverts consist of large images, videos, Google map and website link and all social media links. 

                    We make sure to increase reachability and popularity of your excellent structure in between travelers who are using Social Media Platform promptly to search for the properties regarding their vacation. We interact on Social platforms like Facebook, Instagram, Pinterest and Youtube. We also share Client Testimonials on our blogs.
                    We publish videos based on your holiday lettings which are viewed extensively. Since you tube ranks very high on Google Searches, we upload videos on YouTube and promote it. We communicate our ability to provide expected home lettings through our social media accounts and build relationships with our past, present and future potential travelers.
                    We employ only the best marketing strategies designed to sky rocket lead generation for your rentals. These bullet proof methods are guaranteed to get your vacation rental more bookings at an accelerated rate.
                </p>
            </div>
        </div>
    );
};

export default BannerImage;

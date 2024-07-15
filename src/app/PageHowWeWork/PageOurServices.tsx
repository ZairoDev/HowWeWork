import React from "react";
import Image from 'next/image';
import ServiceImg from '../../../public/images/a.png';

const PageOurServices: React.FC = () => {
    return (
        <div className="flex flex-col p-4 space-y-4">
            <div>
                <h2 className="text-3xl text-center font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
                    Connecting with the travellers
                </h2>
            </div>
            <div className="flex flex-row justify-evenly md:flex-row md:space-x-4">
                <div className="w-full p-5 md:w-1/2 mb-4 md:mb-0">
                    <Image src={ServiceImg} alt="Service_img" className=" bg-white rounded-lg shadow-lg" width={450} height={450} />
                </div>
                <div className="w-full md:w-1/2 p-4  flex items-center">
                    <p className="text-justify">
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
            </div>
        </div>
    );
}

export default PageOurServices;

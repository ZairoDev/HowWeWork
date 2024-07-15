
// //   another 
// <div className="border border-gray-300 shadow-lg rounded-lg flex flex-col md:flex-row gap-10 p-5 md:p-10 mt-10 bg-white">
// <div className="flex-none">
//     <h2 className="text-3xl md:text-4xl font-bold p-5 text-center md:text-left">
//         Create Professional <br />poster we have
//     </h2>
// </div>
// <div className="flex justify-center md:justify-end">
//     <Image src={banner} alt="banner_img" className="rounded-lg w-full h-auto" />
// </div>
// </div>
//     );
// }

// export default ProfessionalListing;


import React from "react";
import Image from 'next/image';
import banner from "../../../public/images/how_we_work_banner.jpg";

const PageProfessionalListing: React.FC = () => {
    return (
        // <div className="flex flex-col justify-center items-center p-10 md:p-20 ">


        // <div className=" flex flex-col md:flex-row gap-10 p-5 md:p-10 mt-10 bg-white">
        // <div className=" flex md:flex-1">
        //     <span className="block text-3xl sm:text-4xl md:text-5xl font-bold p-2 sm:p-4 text-center md:text-left">
        //     Create a Professional <br/>
        //      Listing for Your Rental Space
        //     </span>
        // </div>
        // <div className="border border-gray-200 shadow-lg rounded-lg flex justify-center md:justify-end">
        //     <Image src={banner} alt="banner_img" className="rounded-lg w-full h-auto" />
        // </div>
        // </div>

    //   <div className="border-2 w-full h-full">
    //       <div className="flex flex-col border-4">
    //         <div>
    //             <span>
    //             Create a Professional <br/>
    //             Listing for Your Rental Space
    //             </span>
    //         </div>
    //         <div>
    //         <Image src={banner} alt="banner_img" className="w-full h-80"/>
    //         </div>
    //     </div>
    //   </div>
    <div className=" w-full h-full">
    <div className="flex flex-col ">
        <div className="p-4 ">
            <span className="text-2xl md:text-4xl font-bold">
                Create a Professional <br /> Listing for Your Rental Space
            </span>
        </div>
        <div className="h-30 p-7 ">
            <Image src={banner} alt="banner_img" layout="responsive" className="rounded-lg w-full h-full object-cover" />
        </div>
    </div>
</div>

    

            
        // </div>
    );
}

export default PageProfessionalListing;

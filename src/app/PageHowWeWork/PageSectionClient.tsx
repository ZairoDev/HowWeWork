// "use client";
import Image from "next/image";
import clientSay1 from "../../../public/images/clientSay1.png";
import clientSay2 from "../../../public/images/clientSay2.png";
import clientSay3 from "../../../public/images/clientSay3.png";
import clientSay4 from "../../../public/images/clientSay4.png";
import clientSay5 from "../../../public/images/clientSay5.png";
import clientSay6 from "../../../public/images/clientSay6.png";
import quotationImg from "../../../public/images/quotation.png";
import quotationImg2 from "../../../public/images/quotation2.png";

export interface SectionClientSayProps {
  className?: string;
}

const renderBg = () => (
  <div className="hidden md:block">
    <Image className="absolute top-9 -left-20" src={clientSay1} alt="clientSay1" />
    <Image className="absolute bottom-[100px]  right-full mr-35" src={clientSay2} alt="clientSay2" />
    <Image className="absolute top-full left-[140px]" src={clientSay3} alt="clientSay3" />
    <Image className="absolute -bottom-10 right-[140px]" src={clientSay4} alt="clientSay4" />
    <Image className="absolute left-full ml-32 bottom-[80px]" src={clientSay5} alt="clientSay5" />
    <Image className="absolute -right-10 top-10" src={clientSay6} alt="clientSay6" />
  </div>
);

const SectionClientSay: React.FC<SectionClientSayProps> = ({ className = "" }) => {
  return (
    <div className={`bg-[#F5F5F5] w-full h-80 rounded-lg ${className}`}>
      <div className="text-center mb-6 mt-10 text-4xl font-bold">
        Good news from far away
      </div>
      <div className="text-center mb-6 text-lg text-gray-600">
        Let's see what people think of VS
      </div>
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        {renderBg()}
        <div className="relative mt-12 lg:mt-16">
          <Image
            className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
            src={quotationImg}
            alt="quotation1"
          />
          <Image
            className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
            src={quotationImg2}
            alt="quotation2"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;


// // "use client";
// import Image from "next/image";
// import clientSay1 from "../../../public/images/clientSay1.png";
// import clientSay2 from "../../../public/images/clientSay2.png";
// import clientSay3 from "../../../public/images/clientSay3.png";
// import clientSay4 from "../../../public/images/clientSay4.png";
// import clientSay5 from "../../../public/images/clientSay5.png";
// import clientSay6 from "../../../public/images/clientSay6.png";
// import quotationImg from "../../../public/images/quotation.png";
// import quotationImg2 from "../../../public/images/quotation2.png";

// export interface SectionClientSayProps {
//   className?: string;
// }

// const renderBg = () => (
//   <div className="hidden md:block">
//     <Image className="absolute top-9 -left-20 w-16 h-16 md:w-24 md:h-24" src={clientSay1} alt="clientSay1" />
//     <Image className="absolute bottom-[100px] right-full mr-35 w-16 h-16 md:w-24 md:h-24" src={clientSay2} alt="clientSay2" />
//     <Image className="absolute top-full left-[140px] w-16 h-16 md:w-24 md:h-24" src={clientSay3} alt="clientSay3" />
//     <Image className="absolute -bottom-10 right-[140px] w-16 h-16 md:w-24 md:h-24" src={clientSay4} alt="clientSay4" />
//     <Image className="absolute left-full ml-32 bottom-[80px] w-16 h-16 md:w-24 md:h-24" src={clientSay5} alt="clientSay5" />
//     <Image className="absolute -right-10 top-10 w-16 h-16 md:w-24 md:h-24" src={clientSay6} alt="clientSay6" />
//   </div>
// );

// const SectionClientSay: React.FC<SectionClientSayProps> = ({ className = "" }) => {
//   return (
//     <div className={`bg-[#F5F5F5] w-full h-auto rounded-lg ${className}`}>
//       <div className="text-center mb-6 mt-10 text-2xl md:text-4xl font-bold">
//         Good news from far away
//       </div>
//       <div className="text-center mb-6 text-base md:text-lg text-gray-600">
//         Let's see what people think of VS
//       </div>
//       <div className="relative md:mb-16 max-w-2xl mx-auto">
//         {renderBg()}
//         <div className="relative mt-12 lg:mt-16">
//           <Image
//             className="opacity-50 md:opacity-100 absolute -mr-8 md:-mr-16 lg:mr-3 right-full top-1 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
//             src={quotationImg}
//             alt="quotation1"
//           />
//           <Image
//             className="opacity-50 md:opacity-100 absolute -ml-8 md:-ml-16 lg:ml-3 left-full top-1 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
//             src={quotationImg2}
//             alt="quotation2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionClientSay;

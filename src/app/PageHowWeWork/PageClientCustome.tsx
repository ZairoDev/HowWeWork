import Image from "next/image";
import clientSay1 from "../../../public/images/clientSay1.png";
import clientSay2 from "../../../public/images/clientSay2.png";
import clientSay3 from "../../../public/images/clientSay3.png";
import clientSay4 from "../../../public/images/clientSay4.png";
import clientSay5 from "../../../public/images/clientSay5.png";
import clientSay6 from "../../../public/images/clientSay6.png";
import React from "react";

const PageClientCustome: React.FC = () => {
  return (
    <div className="border-4 w-full relative p-6 bg-white">
      <div className="text-center mb-4 text-xl font-bold">Content to be added</div>
      <div className="relative border-3 h-80 md:h-auto">
        <Image
          className="absolute top-6 left-0 w-16 md:w-24"
          src={clientSay1}
          alt="clientSay1"
        />
        <Image
          className="absolute top-20 left-1/3  w-16 md:w-24"
          src={clientSay2}
          alt="clientSay2"
        />
        <Image
          className="absolute top-24 left-1/2 w-16 md:w-24"
          src={clientSay3}
          alt="clientSay3"
        />
        <Image
          className="absolute top-32 left-2/3 w-16 md:w-24"
          src={clientSay4}
          alt="clientSay4"
        />
        <Image
          className="absolute top-40 left-3/4 w-16 md:w-24"
          src={clientSay5}
          alt="clientSay5"
        />
        <Image
          className="absolute  -left-50 w-16 md:w-24"
          src={clientSay6}
          alt="clientSay6"
        />
      </div>
    </div>
  );
}

export default PageClientCustome;

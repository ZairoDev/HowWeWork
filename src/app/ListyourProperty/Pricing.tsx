import React from "react";
import PricingCard from "./PricingCard";

interface PricingProps {
  data: {
    type: string;
    price: string;
    subscription: string;
    description: string;
    buttonText: string;
    features: string[];
    active?: boolean;
  }[];
}

const Pricing: React.FC<PricingProps> = ({ data }) => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full lg:w-[1100px] px-4 flex flex-wrap justify-center">
            {data.map((pricingData, index) => (
              <PricingCard key={index} {...pricingData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

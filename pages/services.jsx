import React from "react";
import Accordian from "../components/Accordian";
import { useRouter } from "next/router";
function Services() {
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact");
  };

  return (
    <div>
      <div className="h-[400px] mb-4">
        {/* image header */}
        <div className="flex items-center justify-center bg-fixed h-full bg-center bg-cover service-img">
          <div className="p-6">
            <h2 className="text-5xl font-normal text-white">Our Services</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10 px-12 mb-10">
        <div className="">
          <h2 className="text-bold text-5xl">Our Services</h2>
          <button
            className="mt-10 px-[4rem] mb-10 bg-rose-300 text-white hover:bg-red-400 rounded py-[0.9rem]"
            onClick={() => {
              goToContact();
            }}
            onTouchEnd={() => {
              goToContact();
            }}
          >
            Book
          </button>
        </div>
        <div className="md:w-1/2">
          <Accordian />
        </div>
      </div>
    </div>
  );
}

export default Services;

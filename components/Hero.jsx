import React from "react";

function Hero(props) {
  return (
    <div className="flex items-center justify-center h-screen mb-12 custom-img">
      {/* Overlay */}
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-normal text-rose-300">{props.heading}</h2>
        <p className="py-5 text-xl text-gray-100">{props.message}</p>
        <button className="px-8 bg-rose-300 text-white hover:bg-red-400 rounded py-2">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Hero;

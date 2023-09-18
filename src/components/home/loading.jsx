import React from "react";

function Loading() {
  return (
    <>
      <div className=" relative">
        <div className=" relative lg:h-[500px] sm:h-[400px] overflow-hidden hidden sm:block bg-mainBlue">
          <div className="container absolute  left-0 flex flex-col top-1/2 -translate-y-1/2 z-20 gap-16 ">
            <div className="w-60 h-16 bg-darkBlue"></div>
            <div className=" flex gap-5 font-bold text-lg   ">
              <div className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-darkBlue    rounded-full  "></div>
              <div className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-darkBlue rounded-full  "></div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-4 bg-darkBlue "></div>
      </div>
      <div className="w-full  bg-[#000229] sm:px-0 flex flex-col items-center   px-14 pb-5">
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 container sm:gap-6 gap-10 pt-32 pb-5 ">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className="ball w-[100%] md:h-80 sm:h-96 h-[500px] bg-darkBlue rounded-lg    "
            ></div>
          ))}
        </div>
        <div className=" flex justify-center items-center gap-1 mt-4">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="w-8 h-8 bg-darkBlue rounded-full"></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Loading;

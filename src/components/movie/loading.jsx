import React from "react";

function Loading() {
  return (
    <div className=" ">
      <div className=" relative -top-20   container flex flex-col lg:flex-row  items-center md:items-start pt-40       lg:items-center lg:gap-20 gap-10   ">
        <div className=" flex justify-center items-center flex-col gap-1 w-full lg:w-auto">
          <div className=" loading w-60 h-80 "></div>
          <div className=" loading w-40 h-6"></div>
        </div>
        <div className=" flex flex-col gap-4 flex-1 w-full items-center md:items-start">
          <div className=" loading w-60 h-20 "></div>
          <div className=" loading w-1/2 h-8 "></div>
          <div className=" flex gap-2 items-center w-1/5">
            <div className=" loading w-full h-10 rounded-full "></div>
            <div className=" loading w-full h-10 rounded-full"></div>
          </div>
          <div className=" loading w-full h-40 "></div>
          <div className=" flex gap-2 items-center w-1/2 ">
            <div className=" loading w-24 h-14 "></div>
            <div className=" loading w-full flex-1 h-8 "></div>
          </div>
          <div className=" flex gap-2 items-center w-1/2 ">
            <div className=" loading w-1/2 h-20 rounded-full "></div>
            <div className=" loading w-1/2  h-20  rounded-full"></div>
          </div>
        </div>
      </div>
      <div className=" w-full  bg-darkBlue">
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  container sm:gap-6 gap-10 pt-10 pb-5 ">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className="ball w-[100%] md:h-80 sm:h-96 h-[400px] bg-darkBlue loading rounded-lg    "
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;

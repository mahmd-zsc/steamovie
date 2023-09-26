import React from "react";

function Loading() {
  return (
    <div className=" container">
      <div className="my-6 flex flex-col gap-1">
        <div className="w-32 h-8 bg-darkBlue loading "></div>
        <div className="w-60 h-10 bg-darkBlue loading "></div>
        <div className="w-80 h-6 bg-darkBlue loading "></div>
      </div>
      <div className=" h-full w-full border border-lightBlue bg-mainBlue  rounded-sm flex justify-center items-center py-4 ">
        <div className=" w-[95%]  bg-lightBlue grid grid-cols-1 gap-px">
          {Array.from({ length: 20 }, (_, index) => (
            <div
              key={index}
              className="w-full h-[128px] bg-mainBlue flex items-center justify-between  py-1  "
            >
              <div className="flex items-center w-full h-full gap-2">
                <div className=" bg-darkBlue loading  w-20 h-full rounded-sm"></div>
                <div className=" flex flex-col gap-2 ">
                  <div className=" w-32 h-6 bg-darkBlue loading"></div>
                  <div className=" w-20 h-4 bg-darkBlue loading"></div>
                  <div className=" w-28 h-4 bg-darkBlue loading"></div>
                </div>
              </div>
              <div className=" w-8 h-8 bg-darkBlue loading rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;

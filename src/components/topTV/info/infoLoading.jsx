import React from "react";

function InfoLoading() {
  return (
    <div className=" flex relative flex-col justify-between h-full gap-4 py-6 px-4 ">
      <div className=" absolute right-0 top-0 bg-darkBlue loading rounded-full w-10 h-10"></div>
      <div className=" flex items-center gap-2">
        <div className=" w-1/5 h-32 bg-darkBlue loading"></div>
        <div className=" flex flex-col gap-1 w-full">
          <div className=" w-1/2 h-10 bg-darkBlue loading"></div>
          <div className=" w-1/5 h-6 bg-darkBlue loading"></div>
          <div className=" w-1/4 h-8 bg-darkBlue loading"></div>
        </div>
      </div>
      <div className=" flex-1 w-full bg-darkBlue loading"></div>
      <div className=" grid grid-cols-2 gap-2">
        <div className=" bg-darkBlue loading h-10 "></div>
        <div className=" bg-darkBlue loading h-10 "></div>
      </div>
    </div>
  );
}

export default InfoLoading;

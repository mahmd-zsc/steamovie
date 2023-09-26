import React from "react";

function Loading() {
  return (
    <div>
      <div className="mt-10 mb-6">
        <div className="loading bg-darkBlue w-60 h-14 mb-2"></div>
        <div className="loading bg-darkBlue w-20 h-10"></div>
      </div>
      <div className="border  border-lightBlue   min-h-[600px] py-8 px-8">
        <div className="bg-lightBlue grid gap-px">
          {Array.from({ length: 4 }, (_, index) => (
            <div className=" flex items-center justify-between bg-mainBlue py-2">
              <div className=" flex items-center justify-center gap-2">
                <div className=" w-32 h-40 loading bg-darkBlue rounded-lg"></div>
                <div className=" flex flex-col gap-1">
                  <div className="w-20 h-8 loading bg-darkBlue"></div>
                  <div className="w-40 h-6 loading bg-darkBlue"></div>
                  <div className="w-32 h-5 loading bg-darkBlue"></div>
                  <div className="w-14 h-4 loading bg-darkBlue"></div>
                </div>
              </div>
              <div className=" loading w-6 h-6 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;

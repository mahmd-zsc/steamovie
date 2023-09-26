import React from "react";

function SearchLoading() {
  return (
    <div>
      <div className=" mt-10 flex flex-col gap-6">
        <div className="loading w-52 h-10 bg-darkBlue"></div>
        <div className=" loading w-32 h-10 bg-darkBlue"></div>
      </div>
      <div className=" w-full border border-lightBlue bg-mainBlue rounded-md flex justify-center items-center mt-10 py-4">
        <div className=" w-[90%] grid gap-6   ">
          <div className="bg-lightBlue grid grid-cols-1 gap-px">
            {Array.from({ length: 10 }, (_, index) => (
              <div className="flex relative items-center  bg-mainBlue py-1 gap-2 ">
                <div className=" loading w-20 h-32 bg-darkBlue"></div>
                <div className=" flex flex-col gap-2 flex-1">
                  <div className="loading w-1/4 h-8 bg-darkBlue"></div>
                  <div className="loading w-16 h-4 bg-darkBlue"></div>
                  <div className="loading w-1/6 h-6 bg-darkBlue"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchLoading;

import React from "react";
import { useSelector } from "react-redux";

function Title() {
  let selector = useSelector((state) => state.search);

  return (
    <div className="text-white mt-10">
      <h2 className="  font-bold text-4xl mb-6">{`Search "${selector.finalText}" `}</h2>
      <div className=" relative">
        <h4 className=" font-bold text-2xl ps-3">Titles</h4>
        <div className="line absolute left-0 top-0 h-full w-2 bg-mainRed"></div>
      </div>
    </div>
  );
}

export default Title;

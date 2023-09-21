import React from "react";
import { useSelector } from "react-redux";

function Companies() {
  let selector = useSelector((state) => state.movie);
  let image = selector.data.production_companies.filter((l) => l.logo_path);
  return (
    <div className="production_companies w-full     flex   justify-between items-center   py-10 lg:py-2  lg:gap-0 mt-10     ">
      {image.map((p) => (
        <div className=" flex justify-center items-center ">
          <img
            className=" w-20 "
            src={`https://image.tmdb.org/t/p/original/${p.logo_path}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default Companies;

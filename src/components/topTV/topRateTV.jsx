import React, { useEffect } from "react";
import Tittle from "./tittle";
import { useDispatch, useSelector } from "react-redux";
import { fetchToRateMovies } from "../redux/topMovie/toRateAction";
import TopCard from "./topCard";
import Loading from "./loding";
import Info from "./info/info";

function TopRaTV() {
  let selector = useSelector((state) => state.tv);
  console.log(selector)
  let info = useSelector((state) => state.tv.info);

  return (
    <>
      <div>
        {!selector.loading && (
          <div className=" container">
            <Tittle />
            <div
              className={` h-full w-full border border-lightBlue bg-mainBlue  rounded-sm flex justify-center items-center py-4   `}
            >
              <div className=" w-[95%]  bg-lightBlue grid grid-cols-1 gap-px">
                {selector.data.map((t, index) => (
                  <TopCard key={index} data={t} number={index} />
                ))}
              </div>
            </div>
          </div>
        )}
        {selector.loading && <Loading />}
      </div>
      <Info />
    </>
  );
}

export default TopRaTV;

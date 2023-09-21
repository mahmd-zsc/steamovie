import React, { useEffect } from "react";
import Tittle from "./tittle";
import { useDispatch, useSelector } from "react-redux";
import { fetchToRateMovies } from "../redux/topRate/toRateAction";
import TopCard from "./topCard";
import Loading from "./loding";

function TopRate() {
  let selector = useSelector((state) => state.topRate);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToRateMovies(1));
  }, []);

  return (
    <div>
      {!selector.loading && (
        <div className=" container">
          <Tittle />
          <div className=" h-full w-full border border-lightBlue bg-mainBlue  rounded-sm flex justify-center items-center py-4 ">
            <div className=" w-[95%]  bg-lightBlue grid grid-cols-1 gap-px">
              {selector.data.map((t, index) => (
                <TopCard data={t} number={index} />
              ))}
            </div>
          </div>
        </div>
      )}
      {selector.loading && <Loading />}
    </div>
  );
}

export default TopRate;

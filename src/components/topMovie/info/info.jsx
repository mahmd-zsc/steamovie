import React, { useEffect, useRef } from "react";
import cancel from "../../images/cancel.png";
import { useDispatch, useSelector } from "react-redux";
import { changeInfoShow } from "../../redux/topMovie/toRateAction";
import InfoCard from "./infoCard";
import InfoLoading from "./infoLoading";
function Info() {
  // eslint-disable-next-line no-unused-vars
  let information = useSelector((state) => state.topRate);
  // console.log(information);
  let movie = useSelector((state) => state.movie);
  let info = useRef();
  let over = useRef();
  let dispatch = useDispatch();
  let handleCancel = () => {
    dispatch(changeInfoShow(false));
  };
  let handleOverClick = () => {
    dispatch(changeInfoShow(false));
  };

  return (
    information.info && (
      <div className=" fixed h-screen w-full top-0 left-0 flex justify-center items-center z-50   ">
        <div
          onClick={handleOverClick}
          ref={over}
          className=" absolute top-0 left-0 bg-black w-full h-full opacity-40"
        ></div>
        {!movie.loading && (
          <div
            ref={info}
            className=" info relative w-1/2 h-1/2 bg-slate-900 py-6 px-4 rounded-md  z-40 overflow-y-scroll"
          >
            <InfoCard />

            <img
              onClick={handleCancel}
              className=" absolute right-4 top-4 w-6 cursor-pointer"
              src={cancel}
              alt=""
            />
          </div>
        )}
        {movie.loading && (
          <div
            ref={info}
            className=" relative w-1/2 h-1/2 bg-gray-900 py-4 px-4 rounded-md  z-40"
          >
            <InfoLoading />
          </div>
        )}
      </div>
    )
  );
}

export default Info;

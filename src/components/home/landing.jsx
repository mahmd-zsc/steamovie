import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Buttom from "./buttom";
import Ball from "./ball";
import { useAuth } from "../context";
import Cards from "./cards";
import Loading from "./loading";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePage, fetchData } from "../redux/playNow/playAction";

function Landing() {
  let [img, setImg] = useState(0);
  const location = useLocation();
  let selector = useSelector((state) => state.playNow);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(selector.page));
    if (!selector.loading) {
    }
  }, [selector.page]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (img < 4) {
        setImg(img + 1);
      } else {
        setImg(0);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [img]);
  useEffect(() => {
    dispatch(changePage(1));
  }, [location.pathname]);
  return (
    <div>
      {!selector.loading && (
        <>
          <div className=" relative -top-20 lg:h-[600px] sm:h-[400px] overflow-hidden hidden sm:block ">
            <div>
              <img
                className=" min-w-full  "
                src={`https://image.tmdb.org/t/p/original/${selector.data[img].backdrop_path}`}
                alt=""
              />
              <div className=" container absolute  left-0 flex flex-col top-1/2 -translate-y-1/2 z-10  gap-16   ">
                <h1 className=" text-white font-bold text-5xl  z-10 ">
                  {selector.data[img].title}
                </h1>
                <Buttom id={selector.data[img].id} />
              </div>
              <Ball img={img} setImg={setImg} />
            </div>

            {/* <div className=" over absolute w-full h-full  top-0  "></div> */}
          </div>
          <Cards />
        </>
      )}
      {selector.loading && <Loading />}
    </div>
  );
}

export default Landing;

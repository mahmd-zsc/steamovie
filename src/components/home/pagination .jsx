import React, { useEffect, useState } from "react";
import nextImg from "../images/next.png";
import previousImg from "../images/previous.png";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  playNowFetchData,
} from "../redux/playNow/playAction";

function Pagination() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.playNow);
  let [start, setStart] = useState(selector.page < 4 ? 0 : selector.page - 3);
  let [end, setEnd] = useState(start + 5);
  let [next, setNext] = useState(true);
  let [previous, setPrevious] = useState(true);
  const numbersArray = Array.from(
    { length: selector.page + 6 },
    (_, index) => index + 1
  );
  let handleNext = () => {
    if (next) {
      dispatch(changePage(selector.page + 1));
      dispatch(playNowFetchData(selector.page));
    }
  };
  let handlePrevious = () => {
    if (previous) {
      dispatch(changePage(selector.page - 1));
      dispatch(playNowFetchData(selector.page));
    }
  };
  let hadleNubmer = (num) => {
    dispatch(changePage(num));
  };
  useEffect(() => {
    const active = document.querySelector(`#number_${selector.page}`);
    active?.classList.add("active");
  }, [selector.page]);
  useEffect(() => {
    if (selector.page === 1) {
      setPrevious(false);
    }
  }, []);
  return (
    !selector.loading && (
      <div className=" w-72 h-16 rounded-lg flex items-center ">
        <img
          onClick={handlePrevious}
          className={` w-6 h-6 cursor-pointer hover:bg-mainRed rounded-full duration-300  ${
            !previous ? "disabled" : null
          }  `}
          src={previousImg}
          alt=""
        />
        <div className=" pagination flex-1 grid grid-cols-5 w-full  ">
          {numbersArray.slice(start, end).map((n) => (
            <div key={n} className=" flex justify-center items-center">
              <div
                id={`number_${n}`}
                onClick={() => hadleNubmer(n)}
                className="  pag bg-white hover:bg-mainRed duration-300 hover:text-white flex justify-center items-center w-8 h-8  rounded-full cursor-pointer   "
              >
                <p className="  font-bold">{n}</p>
              </div>
            </div>
          ))}
        </div>
        <img
          onClick={handleNext}
          className={` w-6 h-6 cursor-pointer hover:bg-mainRed rounded-full duration-300 ${
            !next ? "disabled" : null
          }  `}
          src={nextImg}
          alt=""
        />
      </div>
    )
  );
}

export default Pagination;

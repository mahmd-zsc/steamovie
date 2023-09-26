import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeRemoveCard,
  removeIdFromList,
} from "../redux/watchedList/watchedListAction";

function RemoveCard() {
  let removeCard = useSelector((state) => state.watchedList.removeCard);
  let data = useSelector((state) => state.watchedList.removeDate);
  let removeRef = useRef();
  let dispatch = useDispatch();
  let handleCancel = () => {
    dispatch(changeRemoveCard(false));
  };
  let handleRemove = () => {
    dispatch(removeIdFromList(data.id));
    dispatch(changeRemoveCard(false));
  };

  return (
    <>
      <div
        className={`${
          removeCard ? "block" : "hidden"
        } fixed h-screen w-full top-0 left-0 flex justify-center items-center`}
      >
        <div
          onClick={() => dispatch(changeRemoveCard(false))}
          className=" absolute top-0 left-0 over w-full h-full bg-black z-40  "
        ></div>
        <div
          ref={removeRef}
          className=" w-60 md:w-80 py-4 px-4  bg-darkBlue shadow-lg shadow-black text-white rounded-lg z-40 animate__animated  animate__pulse  "
        >
          <p>
            <span className="">{data.title}</span> movie will be removed from
            the list
          </p>
          <p className=" text-sm opacity-40">
            You will not be able to undo this action
          </p>
          <div className=" flex  mt-10 gap-2">
            <button
              onClick={handleRemove}
              className=" bg-mainRed hover:bg-darkRed duration-200 py-2 px-4   rounded-lg capitalize"
            >
              delete movie
            </button>
            <button
              onClick={handleCancel}
              className="  text-black hover:bg-gray-300 duration-200 bg-gray-200 py-2 px-4   rounded-lg capitalize"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RemoveCard;

import React, { useEffect, useState } from "react";
import add from "../images/add.png";
import remove from "../images/remove.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addIdToList,
  removeIdFromList,
} from "../redux/watchedList/watchedListAction";
function Bottom() {
  let selector = useSelector((state) => state.movie.data);
  let watchedList = useSelector((state) => state.watchedList);
  let [existing, setExisting] = useState();
  useEffect(() => {
    if (watchedList.ids.length > 0) {
      setExisting(watchedList.ids.includes(selector.id));
    } else {
      setExisting(false);
    }
  }, [watchedList.data]);
  let dispatch = useDispatch();
  let handleAddWatchedList = () => {
    dispatch(addIdToList(selector.id));
  };
  let handleRemoveWatchedList = () => {
    dispatch(removeIdFromList(selector.id));
  };
  return (
    <div className=" flex gap-5 font-bold text-lg mt-4   ">
      {selector.homepage && (
        <a target="_blank" href={selector.homepage}>
          <button className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-mainRed hover:bg-darkRed duration-500 text-white rounded-full capitalize px-4 py-2   ">
            home page
          </button>
        </a>
      )}
      {existing ? (
        <button
          onClick={handleRemoveWatchedList}
          className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-white rounded-full capitalize flex justify-center items-center gap-4 px-4 py-2 text-black disabled:opacity-30 disabled:cursor-not-allowed "
        >
          <img className="w-3 h-3" src={remove} alt="" /> <p>remove list</p>
        </button>
      ) : (
        <button
          onClick={handleAddWatchedList}
          className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-white rounded-full capitalize flex justify-center items-center gap-4 px-4 py-2 text-black disabled:opacity-30 disabled:cursor-not-allowed "
        >
          <img className="w-3 h-3" src={add} alt="" /> <p>add list</p>
        </button>
      )}
    </div>
  );
}

export default Bottom;

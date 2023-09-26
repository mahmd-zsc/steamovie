import { React, useEffect, useState } from "react";
import add from "../images/add.png";
import remove from "../images/remove.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addIdToList,
  removeIdFromList,
} from "../redux/watchedList/watchedListAction";
function Buttom({ id }) {
  let watchedList = useSelector((state) => state.watchedList);
  let ball = useSelector((state) => state.playNow.ball);

  let dispatch = useDispatch();
  let [existing, setExisting] = useState();

  let Navigate = useNavigate();
  let toMovie = () => {
    Navigate(`/${id}`);
  };
  useEffect(() => {
    if (watchedList.ids.length > 0) {
      setExisting(watchedList.ids.includes(id));
    } else {
      setExisting(false);
    }
  }, [watchedList.data, ball]);
  let handleAddWatchedList = () => {
    dispatch(addIdToList(id));
  };
  let handleRemoveWatchedList = () => {
    dispatch(removeIdFromList(id));
  };
  return (
    <div className=" flex gap-5 font-bold text-lg   ">
      <button
        onClick={toMovie}
        className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-mainRed hover:bg-darkRed duration-500 text-white rounded-full capitalize px-4 py-2   "
      >
        view
      </button>
      {existing ? (
        <button
          onClick={handleRemoveWatchedList}
          className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-white rounded-full capitalize flex justify-center items-center gap-4 px-4 py-2 "
        >
          <img className="w-3 h-3" src={remove} alt="" /> <p>remove list</p>
        </button>
      ) : (
        <button
          onClick={handleAddWatchedList}
          className=" lg:w-48 lg:h-16 md:w-40 md:h-14 bg-white rounded-full capitalize flex justify-center items-center gap-4 px-4 py-2 "
        >
          <img className="w-3 h-3" src={add} alt="" /> <p>add list</p>
        </button>
      )}
    </div>
  );
}

export default Buttom;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeInfoShow } from "../../redux/topMovie/toRateAction";
import {
  addIdToList,
  removeIdFromList,
} from "../../redux/watchedList/watchedListAction";

function BottomInfo({ id }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let watchedList = useSelector((state) => state.watchedList);
  let [existing, setExisting] = useState();
  useEffect(() => {
    if (watchedList.ids.length > 0) {
      setExisting(watchedList.ids.includes(id));
    } else {
      setExisting(false);
    }
  }, [watchedList.data]);
  let handleView = () => {
    navigate("/" + id);
    dispatch(changeInfoShow(true));
  };
  let handleAddWatchedList = () => {
    dispatch(addIdToList(id));
  };
  let handleRemoveWatchedList = () => {
    dispatch(removeIdFromList(id));
  };
  return (
    <div className=" w-full grid grid-cols-2 gap-2 py-4 ">
      <button
        onClick={handleView}
        className=" bg-mainBlue py-2 rounded-md hover:bg-darkBlue duration-500 hover:text-mainRed capitalize"
      >
        view
      </button>

      {existing ? (
        <button
          onClick={handleRemoveWatchedList}
          className=" bg-mainBlue py-2 rounded-md hover:bg-darkBlue duration-500 hover:text-mainRed capitalize "
        >
          remove list
        </button>
      ) : (
        <button
          onClick={handleAddWatchedList}
          className=" bg-mainBlue py-2 rounded-md hover:bg-darkBlue duration-500 hover:text-mainRed capitalize "
        >
          add list
        </button>
      )}
    </div>
  );
}

export default BottomInfo;

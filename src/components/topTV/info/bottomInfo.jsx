import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeInfoShow } from "../../redux/topMovie/toRateAction";

function BottomInfo({ id }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleView = () => {
    navigate("/" + id);
    dispatch(changeInfoShow(false));
  };
  return (
    <div className=" w-full grid grid-cols-2 gap-2 py-4 ">
      <button
        onClick={handleView}
        className=" bg-mainBlue py-2 rounded-md hover:bg-darkBlue duration-500 hover:text-mainRed capitalize"
      >
        view
      </button>
      <button className=" bg-mainBlue py-2 rounded-md hover:bg-darkBlue duration-500 hover:text-mainRed capitalize">
        add list
      </button>
    </div>
  );
}

export default BottomInfo;

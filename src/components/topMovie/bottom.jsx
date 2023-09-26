import React from "react";
import info from "../images/info.png";
import { useDispatch, useSelector } from "react-redux";
import { changeInfoShow } from "../redux/topMovie/toRateAction";
import { fetchMovie } from "../redux/movie/movieAction";
function Bottom({ id }) {
  // let selector = useSelector((state) => state);
  // console.log(selector);

  let dispatch = useDispatch();
  let handleInfo = () => {
    dispatch(changeInfoShow(true));
    dispatch(fetchMovie(id));
  };
  return (
    <img
      onClick={handleInfo}
      className="w-6 cursor-pointer"
      src={info}
      alt=""
    />
  );
}

export default Bottom;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import star from "../../images/star.png";
import { useNavigate } from "react-router-dom";
import { changeInfoShow } from "../../redux/topMovie/toRateAction";
import Bottom from "../bottom";
import BottomInfo from "./bottomInfo";
function InfoCard() {
  let data = useSelector((state) => state.movie.data);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let date = data.release_date.split("-")[0];
  let handleTo = () => {
    navigate("/" + data.id);
    dispatch(changeInfoShow(false));
  };
  return (
    <div className="text-white flex flex-col justify-between h-full ">
      <div>
        <div className=" flex items-center gap-2 mb-4 ">
          <img
            className=" w-20"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <h6
              onClick={handleTo}
              className=" text-2xl font-bold cursor-pointer "
            >
              {data.title}
            </h6>
            <p className="opacity-50">{date}</p>
            <div className="flex items-center gap-1">
              <img className="w-3" src={star} alt="" />
              <p className="   opacity-50 ">
                {data.vote_average}
                <span className="text-sm ps-1">({data.vote_count})</span>
              </p>
            </div>
          </div>
        </div>{" "}
        <p className="text-mainRed font-bold ">{data.tagline}</p>
        <p className=" opacity-60">{data.overview}</p>
      </div>

      <BottomInfo id={data.id} />
    </div>
  );
}

export default InfoCard;

import React from "react";
import star from "../images/star.png";
import deleted from "../images/delete (1).png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  changeRemoveCard,
  setRemoveData,
} from "../redux/watchedList/watchedListAction";
function WatchedListCard({ data }) {
  let genres = data.genres.map((n) => n.name).join(", ");
  let dispatch = useDispatch();
  let date = data.release_date.split("-")[0];
  const hours = Math.floor(data.runtime / 60);
  const minutes = data.runtime % 60;
  let runtime = `${hours}h ${minutes}m`;
  let handleRemove = () => {
    dispatch(setRemoveData(data));
    dispatch(changeRemoveCard(true));
  };
  return (
    <div className=" bg-mainBlue py-4 flex justify-between items-center text-white">
      <div className=" flex  gap-2">
        <Link to={`/${data.id}`}>
          <img
            className=" w-32 rounded-md"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt=""
          />
        </Link>

        <div className=" flex flex-col justify-center gap-2 ">
          <Link to={`/${data.id}`}>
            <h6 className=" hover:opacity-50 duration-200 ">{data.title}</h6>{" "}
          </Link>
          <p className=" text-mainRed opacity-60 text-sm ">{data.tagline}</p>
          <p className="text-sm text-gray-200">{`${date} | ${runtime} | ${genres}`}</p>
          <div className=" flex items-center gap-1">
            <img className=" w-3" src={star} alt="" />
            <p className=" text-xs">
              {String(data.vote_average).slice(0, 3)}/10
            </p>
          </div>
          {/* |<p>{data}</p> */}
        </div>
      </div>
      <img
        onClick={handleRemove}
        className=" w-8 opacity-90 cursor-pointer"
        src={deleted}
        alt=""
      />
    </div>
  );
}

export default WatchedListCard;

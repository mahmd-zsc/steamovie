import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./error";

function Movie() {
  let params = useParams();
  let userId = +useParams().movieId;
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  if (!loading) {
    console.log(data);
    console.log(error);
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${userId}?api_key=d633895f69a73e6f50752b9876aaea53`
      )
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setError("");
      })
      .catch((rej) => {
        setLoading(false);
        setData([]);
        setError("not found");
      });
  }, []);
  return <div className=" ">{error && <Error />}</div>;
}

export default Movie;

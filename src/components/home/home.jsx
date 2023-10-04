import React, { useEffect } from "react";
import Landing from "./landing";
import { useDispatch, useSelector } from "react-redux";
import { playNowFetchData } from "../redux/playNow/playAction";

function Home() {
  useEffect(() => {
    document.title = "steamovie - Home";
  }, []);
  return (
    <div>
      <Landing />
    </div>
  );
}

export default Home;

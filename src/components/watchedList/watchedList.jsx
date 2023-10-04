import React, { useEffect } from "react";
import Title from "./title";
import { useSelector } from "react-redux";
import WatchedListCard from "./watchedListCard";
import Empty from "./empty";
import RemoveCard from "./removeCard";
import Loading from "./loading";

function WatchedList() {
  let watchedList = useSelector((state) => state.watchedList);
  useEffect(() => {
    document.title = "steamovie - WatchedList";
  }, []);
  return (
    <>
      <div className=" relative container pb-10">
        {!watchedList.loading ? (
          <>
            <Title />
            <div className="    border  border-lightBlue   min-h-[600px] py-8 px-8  ">
              {watchedList.data.length > 0 ? (
                <div className=" bg-lightBlue grid gap-px">
                  {watchedList.data.map((w) => (
                    <WatchedListCard data={w} />
                  ))}
                </div>
              ) : (
                <div className=" flex justify-center items-center h-full pt-20  ">
                  <Empty />
                </div>
              )}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
      {!watchedList.loading && <RemoveCard />}
    </>
  );
}

export default WatchedList;

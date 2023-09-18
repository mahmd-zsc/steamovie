import React from "react";
import { useSelector } from "react-redux";

function Languages() {
  let selector = useSelector((state) => state.movie.data);
  let languages = selector.spoken_languages.map((n) => n.name).join(" / ");
  console.log(languages);

  return (
    <div>
      <p className=" text-sm lg:text-md">spoken languages : {languages}</p>
    </div>
  );
}

export default Languages;

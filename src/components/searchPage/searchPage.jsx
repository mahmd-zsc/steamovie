import React from "react";
import { useAuth } from "../context";

function SearchPage() {
  let data = useAuth().search;
  console.log(data);
  return <div>search</div>;
}

export default SearchPage;

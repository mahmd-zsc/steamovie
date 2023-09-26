import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import menuImg from "../images/menu.png";
function Nav() {
  let ul = useRef();
  let menu = useRef();
  let nav = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Top Movie",
      path: "/top-movie",
    },
    // {
    //   title: "Top TV",
    //   path: "/top-TV",
    // },
    {
      title: "Watched List",
      path: "/watched-list",
    },
  ];
  let handleMenu = () => {
    ul.current.classList.toggle("hidden");
  };
  let closeMenu = () => {
    ul.current.classList.toggle("hidden");
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!ul.current.contains(e.target) && !menu.current.contains(e.target)) {
        ul.current.classList.add("hidden");
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <ul className="lg:flex items-center gap-20 text-gray-400  font-bold hidden flex-1 justify-center       ">
        {nav.map((n, index) => (
          <li key={index}>
            <NavLink className=" relative pt-8 text-sm" to={n.path}>
              {n.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className=" lg:hidden relative order-1   flex justify-center items-center ms-2 ">
        <img
          ref={menu}
          onClick={handleMenu}
          className=" cursor-pointer w-10 h-10"
          src={menuImg}
          alt=""
        />
        <ul
          ref={ul}
          className="  absolute  text-gray-400  top-12  right-4  font-bold w-40 grid grid-rows-3 gap-4 rounded-lg py-2   bg-mainRed z-50 hidden animate__animated animate__bounceIn        "
        >
          {nav.map((n, index) => (
            <li key={index} className=" w-full">
              <NavLink
                onClick={closeMenu}
                className=" relative ps-2     text-sm w-full block "
                to={n.path}
              >
                {n.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Nav;

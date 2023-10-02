import React from "react";
import linkedIn from "./images/linkedin.png";
import github from "./images/github.png";
import gmail from "./images/envelope.png";
import whatsApp from "./images/whatsapp.png";

function Footer() {
  let name = " Mahmd ";
  return (
    <>
      <div className=" w-full h-12 bg-darkBlue container ">
        <div
          id="foot"
          className="footer   h-full  px-6 sm:px-0 m-auto flex items-center justify-between "
        >
          <p className=" text-white">
            © 2023
            <span className=" text-main_origin font-bold text-mainRed">
              {name}
            </span>
            All Right Reserved
          </p>
          <ul className="flex gap-2   justify-center ">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohamed-mahmound-b160b2270/"
              >
                <img className="w-5 h-5 " src={linkedIn} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/mahmd-zsc">
                <img className="w-5 h-5 " src={github} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:moma8607914@gmail.com">
                <img className="w-5 h-5 " src={gmail} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=0201062003803"
              >
                <img className="w-5 h-5 " src={whatsApp} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;

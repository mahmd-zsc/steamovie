import React, { useEffect, useRef } from "react";

function Ball({ img, setImg }) {
  const ballsRef = useRef(null);
  const ballRef = useRef(null);
  let handleBall = (index) => {
    let balls = document.querySelectorAll(".ball");
    balls.forEach((b) => {
      b.classList.remove("active");
    });
    balls[index].classList.add("active");
    setImg(index);
  };


  useEffect(() => {
    if (ballsRef.current) {
      let balls = ballsRef.current.querySelectorAll(".ball");
      balls.forEach((b) => {
        b.classList.remove("active");
      });
      balls[img].classList.add("active");
    }
  }, [img]);
  return (
    <div
      ref={ballsRef} // Attach the ref to the balls element
      className="balls   absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10 "
    >
      {Array.from({ length: 5 }, (_, index) => (
        <div
          ref={ballRef}
          onClick={() => handleBall(index)}
          key={index}
          className="ball w-2 h-2  bg-white  rounded-full"
        ></div>
      ))}
    </div>
  );
}

export default Ball;

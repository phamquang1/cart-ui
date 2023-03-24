import React from "react";
import useResize from "../../hooks/useResize";
import "./slides.scss";

export const Slides = () => {
  const size = useResize();

  return (
    <>
      {size.width > 768 ? (
        <div className="banner">
          <img className="image" src="assets/imgs/2.jpg" alt="" />
          <div className="infomation">
            <p className="location">Quỳnh Mỹ, Quỳnh Phụ, Thái Bình.</p>
            <p className="name">Pizza Store !!</p>
          </div>
        </div>
      ) : (
        <div id="slide" className="p-5">
          <div className="slides">
            <div className="slide">
              <img
                className="item"
                src="assets/imgs/1.jpg"
                alt="src/assets/imgs/1.jpg"
              />
            </div>
            <div className="slide">
              <img className="item" src="assets/imgs/2.jpg" alt="" />
            </div>
            <div className="slide">
              <img className="item" src="assets/imgs/3.jpg" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

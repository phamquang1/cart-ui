import React from "react";
import { NavLink } from "react-router-dom";
import useResize from "../../hooks/useResize";
import "./tooolbar.scss";
export const ToolbarHeader = ({ header }) => {
  const size = useResize();
  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-link activated" : "nav-link";
  };
  return (
    <>
      {size.width > 768 ? (
        <header id="header" className="header-large">
          <div className="left">
            <img className="image" src={"assets/imgs/logo.jpg"} alt="logo" />
            <input
              className="input"
              placeholder="Tìm kiếm sản phẩm"
              type="text"
            />
          </div>
          <div className="center">
            <NavLink to={""} className={navLinkClass}>
              <div className="tab">
                {/* <i className="fa-solid fa-house-user tab-icon home"></i> */}
                <p className="name home">Trang chủ</p>
              </div>
            </NavLink>
            <NavLink to={"cart"} className={navLinkClass}>
              <div className="tab">
                {/* <i className="fa-solid fa-cart-shopping tab-icon cart"></i> */}
                <p className="name cart">Giỏ hàng</p>
              </div>
            </NavLink>
            <NavLink to={"messenger"} className={navLinkClass}>
              <div className="tab">
                {/* <i className="fa-brands fa-facebook-messenger tab-icon messenger"></i> */}
                <p className="name messenger">Tin nhắn</p>
              </div>
            </NavLink>

            <NavLink to={"user"} className={navLinkClass}>
              <div className="tab">
                {/* <i className="fa-solid fa-user tab-icon user"></i> */}
                <p className="name user">Tài khoản</p>
              </div>
            </NavLink>
          </div>
          <div className="right">
            <p className="name">
              <img
                className="avatar"
                src={"assets/imgs/avatar.jpg"}
                alt="logo"
              />
              <span>Quang</span>
            </p>
            <p className="cart">Cài đặt</p>
          </div>
        </header>
      ) : (
        <header id="header" className="header">
          {header}
        </header>
      )}
    </>
  );
};

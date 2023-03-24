import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useResize from "../../hooks/useResize";
import "./tabs.scss";

export const Tabs = ({ handleChangeHeader }) => {
  const navigate = useNavigate();
  const size = useResize();

  const handleNavigate = (url) => {
    navigate(url);
  };

  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-link activated" : "nav-link";
  };

  const changeHeader = (text) => {
    handleChangeHeader(text);
  };
  return (
    <>
      {size.width > 768 ? null : (
        <footer className="footer">
          <NavLink to={""} className={navLinkClass}>
            <div className="tab" onClick={() => changeHeader("Trang chủ")}>
              {/* <i className="fa-solid fa-house-user tab-icon home"></i> */}
              <p className="name home">Trang chủ</p>
            </div>
          </NavLink>
          <NavLink to={"cart"} className={navLinkClass}>
            <div className="tab">
              {/* <i className="fa-solid fa-cart-shopping tab-icon cart"></i> */}
              <p className="name cart" onClick={() => changeHeader("Giỏ hàng")}>
                Giỏ hàng
              </p>
            </div>
          </NavLink>
          <NavLink to={"messenger"} className={navLinkClass}>
            <div className="tab">
              {/* <i className="fa-brands fa-facebook-messenger tab-icon messenger"></i> */}
              <p
                className="name messenger"
                onClick={() => changeHeader("Tin nhắn")}
              >
                Tin nhắn
              </p>
            </div>
          </NavLink>

          <NavLink to={"user"} className={navLinkClass}>
            <div className="tab">
              {/* <i className="fa-solid fa-user tab-icon user"></i> */}
              <p
                className="name user"
                onClick={() => changeHeader("Tài khoản")}
              >
                Tài khoản
              </p>
            </div>
          </NavLink>
        </footer>
      )}
    </>
  );
};

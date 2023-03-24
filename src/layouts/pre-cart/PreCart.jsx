import React, { useState } from "react";
import "./precart.scss";

const PreCart = ({ carts }) => {
  console.log(carts);
  const [time, setTime] = useState(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  });
  const total = carts.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  return (
    <div className="container-precart">
      <header className="bill">Hóa đơn</header>
      <p className="infomation">Pizze Store, Thái Bình.</p>
      <p className="time">Thứ ba, {time}.</p>
      <div className="cartss">
        {carts.map((cart, i) => (
          <div className="cart" key={i}>
            <div className="left-img">
              <img
                className="img"
                src={"assets/imgs/" + cart.img}
                alt="product"
              />
            </div>
            <div className="detail">
              <div className="name">{cart.name}</div>
              <div className="right">
                <p className="number">x3</p>
                <p className="price">{cart.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-btn">
        <button className="btn-total">Tổng: {total}</button>
      </div>
    </div>
  );
};

export default PreCart;

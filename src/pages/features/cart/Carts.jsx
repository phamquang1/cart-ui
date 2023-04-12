import React, { useState } from "react";
import useResize from "../../../hooks/useResize";
import "./cart.scss";

const Carts = () => {
  const size = useResize();
  const [carts, setCarts] = useState([
    { id: 1, name: "Iphone", img: "4.jpg", price: 10 },
  ]);
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
    <>
      {size.width > 768 ? (
        "Chưa làm màn hình PC"
      ) : (
        <div className="container-cart">
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
                    <p className="number">x1</p>
                    <p className="price">{cart.price}$</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer-btn">
            <button className="btn-total">Tổng: {total}$</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Carts;

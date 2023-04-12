import React, { useEffect, useState } from "react";
import useResize from "../../../hooks/useResize";
import PreCart from "../../../layouts/pre-cart/PreCart";
import { Products } from "../../../layouts/Products/Products";
import { Slides } from "../../../layouts/Slides/Slides";
import "./home.scss";

export const Home = () => {
  const size = useResize();
  const [carts, setCarts] = useState([]);
  const handleAddProduct = (product) => {
    setCarts([...carts, product]);
  };
  useEffect(() => {
    // setTimeout(() => {
    //   Promise.resolve(9).then(console.log);
    // }, 0);
    // setTimeout(() => {
    //   console.log(1);
    // }, 0);
    // Promise.resolve(9).then(console.log);
    //   console.log(1);
    const abc = async () => {
      console.log(8); // 1:
      await Promise.resolve(2)
        .then(console.log)
        .then(() => console.log(3));
      // console.log(3);
    };
    setTimeout(() => {
      Promise.resolve(9).then(console.log);
    }, 0);
    setTimeout(() => {
      console.log(1);
    }, 0);

    abc();
    Promise.resolve(4).then(console.log);
    console.log(6);
    // const a = () => {
    //   console.log(1);
    // };
    // const b = () => {
    //   setTimeout(() => {
    //     console.log(2);
    //   }, 5000);
    // };
    // const c = () => {
    //   console.log(3);
    // };
    // b();
    // c();
    // a();
    // -> 8
    // setTimeout -> Macro Task Quece
    // -> 6
    // Promise(2) -> Micro Task Quece (sau awai thì dừng tất cả)
    // Promise(4) -> Micro Task Quece
    // Call stack trống , lúc này Quece có [Promis(2), Promise(4)] , -> chạy Promise(2) -> gặp then console.log(3) -> Micro Task Quece
    // Quece lúc này có [Promis(4), then(3)] -> chạy Promise(4) -> 3
    // cuối cùng : Macro Task
    // Note: Micro Task(promise) được ưu tiên hơn Macro Task (settimeout, setInerval)
  }, []);
  return (
    <div>
      <Slides></Slides>

      <div className="container-home">
        <div className="contain-product">
          <Products handleAddProduct={handleAddProduct}></Products>
        </div>
        {size.width > 768 && carts.length > 0 ? (
          <div className="contain-precart">
            <PreCart carts={carts}></PreCart>
          </div>
        ) : null}
      </div>
    </div>
  );
};

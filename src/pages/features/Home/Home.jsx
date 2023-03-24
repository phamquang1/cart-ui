import React, { useState } from "react";
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

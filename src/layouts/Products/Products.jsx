import React from "react";
import "./Products.scss";
const PRODUCTS = [
  { id: 1, name: "Iphone", img: "4.jpg", price: 10 },
  { id: 2, name: "Aphone", img: "5.jpg", price: 100 },
  { id: 12, name: "SamSung", img: "6.jpg", price: 20 },
  { id: 13, name: "Xiaomi", img: "7.jpg", price: 30 },
  { id: 14, name: "Nokia", img: "8.jpg", price: 40 },
  { id: 15, name: "Windows", img: "4.jpg", price: 60 },
  { id: 16, name: "IOS", img: "6.jpg", price: 80 },
  { id: 17, name: "Android", img: "5.jpg", price: 90 },
  { id: 1333, name: "BOS", img: "8.jpg", price: 1000 },
  { id: 133333, name: "ColorS", img: "7.jpg", price: 220 },
  { id: 1234, name: "Macbook", img: "4.jpg", price: 110 },
  { id: 2342341, name: "IPad", img: "6.jpg", price: 290 },
];
export const Products = ({ handleAddProduct }) => {
  const onAddProduct = (product) => {
    handleAddProduct(product);
  };
  return (
    <>
      <div className="products">
        {PRODUCTS.map((product, index) => (
          <div className="product" key={index}>
            <div className="img">
              <img src={"assets/imgs/" + product.img} alt="product" />
            </div>
            <p className="name">{product.name}</p>
            <div className="content">
              <p className="price">{product.price} $</p>
              <button className="add" onClick={() => onAddProduct(product)}>
                Mua
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

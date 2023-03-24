import React from "react";
import useResize from "../../../hooks/useResize";
import "./user.scss";

const User = () => {
  const size = useResize();

  return (
    <>{size.width > 768 ? "Chưa làm trên PC" : "Chưa làm trên Smartphone"}</>
  );
};

export default User;

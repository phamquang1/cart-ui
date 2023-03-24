import React from "react";
import useResize from "../../../hooks/useResize";

export const Inbox = () => {
  const size = useResize();

  return (
    <>{size.width > 768 ? "Chưa làm trên PC" : "Chưa làm trên Smartphone"}</>
  );
};

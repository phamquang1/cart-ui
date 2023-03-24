import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Tabs } from "../../layouts/tabs/Tabs";
import { ToolbarHeader } from "../../layouts/Toolbar/Toolbar";
import "./features.scss";

export const Features = () => {
  const [header, setHeader] = useState("Trang chủ");

  const handleChangeHeader = (text) => {
    setHeader(text);
  };
  return (
    <>
      <ToolbarHeader header={header}></ToolbarHeader>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Tabs handleChangeHeader={handleChangeHeader}></Tabs>
    </>
  );
};

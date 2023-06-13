import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useResize from "../../../hooks/useResize";
import "./login.scss";

export const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const size = useResize();
  // const [size, setSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });
  const handleNavigate = () => {
    const token = "quang token";
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify([name]));
    navigate("/");
  };
  const handleChangeInput = (e) => {
    const name = e.target.value;
    setName(name);
  };

  return (
    <div className="container-login">
      {size.width > 768 ? (
        <div className="image">
          <img src="assets/imgs/1.jpg" />
        </div>
      ) : null}
      <div className="login">
        <TextField
          onChange={(e) => handleChangeInput(e)}
          label="Username"
          id="outlined-size-small"
          size="small"
        />
        <TextField label="Password" id="outlined-size-small" size="small" />

        <Button variant="contained" onClick={handleNavigate}>
          Login
        </Button>
      </div>
    </div>
  );
};

// export default Login;

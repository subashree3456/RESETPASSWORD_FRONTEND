import React from "react";
import { Link } from "react-router-dom";

const LoginSuccess = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "lightblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>LoginSuccess</h1>
      <Link to={"/"}>
        <button style={{ backgroundColor: "black", color: "white" }}>
          Home
        </button>
      </Link>
    </div>
  );
};

export default LoginSuccess;

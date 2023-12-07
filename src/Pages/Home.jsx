import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      <h1>Welcome To Full System Of Reset Password</h1>
      <p>Rules To Follow:</p>
      <ol
        style={{
          textAlign: "center",
          listStyle: "none",
        }}
      >
        <Link to={"/register"}>
          <li>Creat An Account</li>
        </Link>
        <Link to={"/login"}>
          <li>Try To Login</li>
        </Link>
        <li>Then Try The Forget Password</li>
      </ol>
    </div>
  );
};

export default Home;

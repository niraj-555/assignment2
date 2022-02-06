import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/list">List</Link>
    </>
  );
};

export default Home;

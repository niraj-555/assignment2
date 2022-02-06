import React, { useState } from "react";
import "./Register.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name " + " : " + name + "\n" + "Password " + " : " + password);
  };

  return (
    <div className="mainContainer">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Name</label>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submitButton">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    date: new Date().toLocaleDateString(),
    address: "",
    gender: "",
    graduation: "",
  });

  const Gender = ["Male", "Female", "Other"];
  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <h1 className="title">Siddhi University</h1>
      <div className="mainContainer">
        <form onSubmit={submitHandler}>
          <h1 style={{ marginBottom: "2rem" }}>Register</h1>

          <div className="inputDiv">
            <label>Name</label>
            <input
              type="name"
              name="name"
              value={user.name}
              onChange={changeHandler}
            />
          </div>

          <div className="inputDiv">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
            />
          </div>

          <div className="inputDiv">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
            />
          </div>
          <div className="inputDiv">
            <label>Date of Birth</label>

            <input
              type="date"
              name="date"
              placeholder="dd-mm-yyyy"
              value={user.date}
              //  min="1997-01-01" max="2030-12-31"
              onChange={changeHandler}
            />
          </div>
          <div className="inputDiv">
            <label>Gender</label>
            <div>
              <input
                type="radio"
                value="Male"
                name="gender"
                onChange={changeHandler}
              />
              Male
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={changeHandler}
              />
              Female
              <input
                type="radio"
                value="Other"
                name="gender"
                onChange={changeHandler}
              />
              Other
            </div>
          </div>
          {/* <div>
            <h4>Gender</h4>
            <ul>
              {Gender.map((gender) => (
                <li
                  style={{
                    cursor: "pointer",
                    listStyleType: "none",
                  }}
                  key={gender}
                  onClick={() => setGender(gender)}
                >
                  {gender}
                </li>
              ))}
            </ul>
          </div> */}
          <div className="inputDiv">
            <label>Graduation</label>
            <div>
              <input
                type="radio"
                value="Completed"
                name="graduation"
                onChange={changeHandler}
              />
              Completed
              <input
                type="radio"
                value="Not Completed"
                name="graduation"
                onChange={changeHandler}
              />
              Not Completed
            </div>
          </div>
          <div className="inputDiv">
            <label>Address</label>
            <input
              type="text"
              style={{ height: "10vh" }}
              name="address"
              value={user.address}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

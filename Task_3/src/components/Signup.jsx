import React, { useState } from "react";
import "./Signup.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const userDetails = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(userDetails);
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name === "" || data.email === "" || data.password === "") {
      alert("enter below data");
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      let arr = [];
      arr = [...getData];
      arr.push(data);
      localStorage.setItem("user", JSON.stringify(arr));
      toast.success("Sign Up Succefully");
      navigate("/login");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleInput}
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an accout ? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

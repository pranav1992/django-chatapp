import React from "react";
import "./SignIn.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SignIn = () => {
  let navigate = useNavigate();
  const login = async () => {
    const url = "http://127.0.0.1:8000/user/signin/";
    const result = await axios({
      method: "post",
      url: url,
      data: {
        username: formData.name,
        password: formData.password,
      },
    });
    if (result.status === 200) {
      navigate("/");
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    await login();
    // console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Email</label>
            <input
              type="text"
              // type="email"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

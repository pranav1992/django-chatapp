import React from "react";
import "./SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { fetchLogin } from "../../../api/userApi";
import { useDispatch } from "react-redux";
import { setAuth, setuser } from "../../../redux/slices/authSlice";


const SignIn = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const login = async () => {
    const result = await fetchLogin({
      username: formData.name,
      password: formData.password,
    })
    if (result.status === 200) {
      // dispatch(setAuth({"access_token": result.data['']}))
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
    await login();
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

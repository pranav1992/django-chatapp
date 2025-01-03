import React from "react";
import "./SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // State to display feedback messages
  const [error, setError] = useState(""); // State to display error messages
  const navigate = useNavigate()

  const signUp = async () => {
    try {
        const url = "http://127.0.0.1:8000/user/signup/";
        const response = await axios({
          method: "post",
          url: url,
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            username: formData.username,
            password: formData.password,
          },
        });
        if (response.status === 201) {
            navigate("/")
            setMessage("User registered successfully!");
          }else{
            setError(response.statusText);
          }
    } catch (err) {
        if (err.status) {
            // Server responded with a status other than 2xx
            const { status, data } = err.response;
            if (err.status === 400 && data.error) {
              setError(data.error);
            } else if (status === 500) {
              setError("Internal server error. Please try again later.");
            }
          } else {
            // Network error or other issues
            setError("An unexpected error occurred. Please try again.");
          }
          setMessage(""); // Clear success message on error
        }
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp()
    // Handle form submission logic here
    // console.log("Form Data Submitted:", formData);
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Sign Up</h1>
        {message && <p className="success-message text-black ">{message}</p>}
        {error && <p className="error-message text-black">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group justify-center">
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="input"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              className="input"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

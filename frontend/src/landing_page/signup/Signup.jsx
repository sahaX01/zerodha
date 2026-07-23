import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        inputValue,
        { withCredentials: true },
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          window.location.href = "http://localhost:5174";
        }, 1500);
      } else {
        handleError(message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      handleError(
        error.response?.data?.message || "Connection error - check backend",
      );
    }

    setInputValue({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        {/* Left Side */}
        <div className="col-lg-6 d-none d-lg-block text-center">
          <img
            src="https://zerodha.com/static/images/account_open.svg"
            alt="signup"
            className="img-fluid"
            style={{ maxHeight: "420px" }}
          />
        </div>

        {/* Right Side */}
        <div className="col-lg-5 col-md-8">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="fw-bold mb-2">Open a free account</h2>

              <p className="text-muted mb-4">
                Start investing and trading with Zerodha.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    name="username"
                    value={username}
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">
                  Create Account
                </button>
              </form>

              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none fw-semibold">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;

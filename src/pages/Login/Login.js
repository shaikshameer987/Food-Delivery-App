import React, { useState } from "react";
import "./Login.css";
import Cookies from "js-cookie";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const cookie = Cookies.get("accessToken");

  if (cookie) {
    return <Navigate to={"/"}/>;
  }

  function handleUserInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleUserLogin = (e) => {
    e.preventDefault();
    fetch("https://apis.ccbp.in/login", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (+res.status_code === 400) {
          setError(true);
        } else {
          Cookies.set("accessToken", res.jwt_token);
          setError(false);
          navigate("/");
        }
        //
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <main className="login_page">
      <div className="outer_container">
        <div className="container_left">
          <div className="login_div">
            <div className="brand_div">
              <img
                className="brand_logo"
                src="https://res.cloudinary.com/dllshtsed/image/upload/v1670287415/Frame_274_vkglt2.png"
                alt="logo"
              />
              <p className="brand_title">
                <i>Tasty Kitchens</i>
              </p>
            </div>
            <form onSubmit={handleUserLogin}>
              <p className="login_heading">Login</p>
              <label className="username_label">USERNAME</label>
              <input
                type="text"
                name="username"
                value={user.username}
                className="username_input"
                onChange={handleUserInput}
              />
              <label className="password_label">PASSWORD</label>
              <input
                type="text"
                name="password"
                value={user.password}
                className="password_input"
                onChange={handleUserInput}
              />
              {error && (
                <p className="error_message">
                  Please enter a valid Username or Password
                </p>
              )}
              <button type="submit" className="login_button">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="container_right">
          <img
            className="login_image"
            src="https://res.cloudinary.com/dquxo9syn/image/upload/v1674744325/Tasty%20Kitchens/ts_dys49r.jpg"
            alt="food"
          />
        </div>
      </div>
    </main>
  );
}

export default Login;

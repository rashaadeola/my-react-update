import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const logUserIn = (e) => {
    e.preventDefault();
    let userSavedData = JSON.parse(localStorage.getItem(userData.email));
    if (userSavedData) {
      if (userData.password === userSavedData.password1) {
        navigate("/")
      } else {
        setErrorMessage("Incorrect password");
      }
    } else {
      setErrorMessage("User not found");
    }
  };

  return (
    <div className="login">
      <div className="background">
        <div className="title">
          <p>Welcome to LaQuel</p>
        </div>
        <form action="" onSubmit={logUserIn}>
          <p>Email</p>
          <input
            value={userData.email}
            id="Email"
            type="email"
            onChange={(e) => {
              setUserData((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
          <p>Password</p>
          <input
            value={userData.password}
            id="password"
            type="password"
            onChange={(e) => {
              setUserData((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
          />
          <p className="error">{errorMessage}</p>
          <br />
          <button onclick="login()" type="submit">
            Login
          </button>
        </form>
        <a href="./signup">Sign</a>
      </div>
    </div>
  );
}

export default Login;

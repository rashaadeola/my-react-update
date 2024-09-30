import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="background">
        <div className="title">
          <p>Welcome to LaQuel</p>
        </div>
        <form action="">
          <p>Email</p>
          <input value="" id="Email" type="text" />
          <p>Password</p>
          <input value="" id="password" type="password" />
          <br />
          <button onclick="login()" type="submit">
            Login
          </button>
        </form>
        <a href="./signupPage.html">Sign</a>
      </div>
    </div>
  );
}

export default Login;

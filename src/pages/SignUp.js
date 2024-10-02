import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });

  const updateEmail = (email) => {
    setUserData((prev) => {
      return { ...prev, email: email };
    });
  };

  const updateUserName = (userName) => {
    setUserData((prev) => {
      return { ...prev, username: userName };
    });
  };
  const updatePassword1 = (password1) => {
    setUserData((prev) => {
      return { ...prev, password1: password1 };
    });
  };
  const updatePassword2 = (password2) => {
    setUserData((prev) => {
      return { ...prev, password2: password2 };
    });
  };

  const submitSignUp = (event) => {
    event.preventDefault();
    console.log(userData);
    if (userData.password1 === userData.password2) {
      setErrorMessage("");
      localStorage.setItem(userData.email, JSON.stringify(userData));
      navigate('/login')
    } else {
      setErrorMessage("Passwords don't match");
    }
  };

  return (
    <div className="signup">
      <div className="background">
        <div className="title">
          <p>Sign up for LaQuel</p>
        </div>
        <form action="" onSubmit={submitSignUp}>
          <p>Email</p>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => updateEmail(e.target.value)}
          />
          <p>Username</p>
          <input type="text" onChange={(e) => updateUserName(e.target.value)} />
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => updatePassword1(e.target.value)}
          />
          <br />
          <p>Confirm Password</p>
          <input
            type="password"
            onChange={(e) => updatePassword2(e.target.value)}
          />
          <p className="error">{errorMessage}</p>
          <br />

          <div className="checkbox">
            <input type="checkbox" />
            <p id="test">
              I want to recieve emails about LaQuel and related intuit products
              <br />
              and feature updates,marketing best pratices and promotions from
              LaQuel
            </p>
          </div>
          <div className="terms">
            <p>
              By creating an account,you agree to our <a href="s">Terms</a> and
              have read and acknowleged <br />
              the <a href="s">Global Privacy Statements</a>
            </p>
          </div>
          <button type="submit">
            <p>Sign Up</p>
          </button>
        </form>
        <a href="./login">Login here</a>
      </div>
    </div>
  );
}

export default SignUp;

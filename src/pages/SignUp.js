import React from "react";

function SignUp() {
  return (
    <div className="signup">
      <div className="background">
        <div className="title">
          <p>Sign up for LaQuel</p>
        </div>
        <form action="">
          <p>Email</p>
          <input type="text" />
          <p>Username</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <br />
          <p>Confirm Password</p>
          <input type="password" />
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
        <a href="./loginPage.html">Login here</a>
      </div>
    </div>
  );
}

export default SignUp;

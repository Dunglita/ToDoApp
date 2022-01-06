import React from "react";
import "../Css/Login.css";
export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-form">
        <form>
          <h3>Welcome back!</h3>
          <label for="username">Username</label>
          <input type="text" id="username" />
          <label for="password">Password</label>
          <input type="password" id="password" />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
}

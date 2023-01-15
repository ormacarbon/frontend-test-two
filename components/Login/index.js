import React, { useState } from "react";
import { LoginWrapper } from "./styles";
import Enter from "./Enter";
import Register from "./Register";
import { FadeTransition } from "../../styles/globalStyled"

function Login() {
  const [loginView, setLoginView] = useState("start");

  const onData = (data) => {
    setLoginView(data);
  };

  return (
    <LoginWrapper>
      <div className="login-area">
        {loginView === "start" ? (
          <FadeTransition>
            <h1>Rick and Morty Data App</h1>
            <span>Search for your favourite character data</span>
            <div className="login-choice-btn">
              <button onClick={() => setLoginView("login")}>Login</button>
              <button onClick={() => setLoginView("register")}>Register</button>
            </div>
          </FadeTransition>
        ) : loginView === "register" ? (
          <Register onLoginState={onData} />
        ) : (
          <Enter onLoginState={onData} />
        )}
      </div>
      <div className="video-area" />
    </LoginWrapper>
  );
}

export default Login;

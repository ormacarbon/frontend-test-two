import React, { useRef } from "react";
import { FormsWrapper } from "./styles";
import { useSnackbar } from "react-simple-snackbar";
import { FadeTransition } from "../../styles/globalStyled";

function Register({ onLoginState }) {
  const options = {
    position: "top-center",
    style: {
      backgroundColor: "midnightblue",
      border: "2px solid lightgreen",
      color: "lightblue",
      fontFamily: "Menlo, monospace",
      fontSize: "20px",
      textAlign: "center",
    },
    closeStyle: {
      color: "lightcoral",
      fontSize: "16px",
    },
  };

  const loginRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const [openSnackbar] = useSnackbar(options);

  const registerUser = () => {
    const { value: login } = loginRef.current;
    const { value: password } = passwordRef.current;
    const { value: repeatPassword } = repeatPasswordRef.current;

    if (!login || !password || !repeatPassword) {
      openSnackbar("Please fill all the forms!");
      return;
    }

    if (password !== repeatPassword) {
      openSnackbar("Passwords are not the same!");
      return;
    }

    const userData = {
      login,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    openSnackbar("User registered!");
    onLoginState("start");
  };

  return (
    <FadeTransition>
      <FormsWrapper>
        <h1>Fill all the forms to register</h1>
        <div>
          <input ref={loginRef} type="text" placeholder="Login" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input
            ref={repeatPasswordRef}
            type="password"
            placeholder="Repeat password"
          />
          <button onClick={registerUser}>Register</button>
          <button className="return-btn" onClick={() => onLoginState("start")}>
            Return
          </button>
        </div>
      </FormsWrapper>
    </FadeTransition>
  );
}

export default Register;

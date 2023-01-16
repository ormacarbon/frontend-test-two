import React, { useRef } from "react";
import { FormsWrapper } from "./styles";
import { FadeTransition } from "../../styles/globalStyled";
import useCustomSnackbar from "../../helpers/useCustomSnackbar";
import CustomButton from "../CustomButton";

function Register({ onLoginState }) {
  const loginRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const { openCustomSnackbar } = useCustomSnackbar();

  const registerUser = () => {
    const { value: login } = loginRef.current;
    const { value: password } = passwordRef.current;
    const { value: repeatPassword } = repeatPasswordRef.current;

    if (!login || !password || !repeatPassword) {
      openCustomSnackbar("Please fill all the forms!");
      return;
    }

    if (password !== repeatPassword) {
      openCustomSnackbar("Passwords are not the same!");
      return;
    }

    const userData = {
      login,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    openCustomSnackbar("User registered!");
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
          <CustomButton action={registerUser}>Register</CustomButton>
          <CustomButton theme="danger" action={() => onLoginState("start")}>
            Return
          </CustomButton>
        </div>
      </FormsWrapper>
    </FadeTransition>
  );
}

export default Register;

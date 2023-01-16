import React, { useRef, useEffect, useState, useContext } from "react";
import { FormsWrapper } from "./styles";
import { useRouter } from "next/router";
import { FadeTransition } from "../../styles/globalStyled";
import { MainWrapper } from "../Wrapper";
import useCustomSnackbar from "../../helpers/useCustomSnackbar";
import CustomButton from "../CustomButton";

function Enter({ onLoginState }) {
  const loginRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const [localUserData, setLocalUserData] = useState({});
  const { setIsLogged } = useContext(MainWrapper);
  const { openCustomSnackbar } = useCustomSnackbar();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("userData"));
    if (localUser) {
      setLocalUserData(localUser);
    }
  }, []);

  const loginUser = () => {
    const { value: login } = loginRef.current;
    const { value: password } = passwordRef.current;

    if (!login || !password) {
      openCustomSnackbar("Please fill all the forms!");
      return;
    }

    if (login !== localUserData.login || password !== localUserData.password) {
      openCustomSnackbar("Wrong login or password!");
      return;
    }

    setIsLogged(true);
    openCustomSnackbar("User logged in!");
    router.push("/dashlist");
  };

  return (
    <FadeTransition>
      <FormsWrapper>
        <h1>Log on your account</h1>
        <div>
          <input ref={loginRef} type="text" placeholder="Login" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <CustomButton action={loginUser}>Enter</CustomButton>
          <CustomButton theme="danger" action={() => onLoginState("start")}>
            Return
          </CustomButton>
        </div>
      </FormsWrapper>
    </FadeTransition>
  );
}

export default Enter;

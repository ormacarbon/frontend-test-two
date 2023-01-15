import React, { useRef, useEffect, useState, useContext } from "react";
import { FormsWrapper } from "./styles";
import { useSnackbar } from "react-simple-snackbar";
import { useRouter } from "next/router";
import { FadeTransition } from "../../styles/globalStyled";
import { MainWrapper } from "../Wrapper";

function Enter({ onLoginState }) {
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
  const router = useRouter();
  const [localUserData, setLocalUserData] = useState({});
  const [openSnackbar] = useSnackbar(options);
  const { setIsLogged } = useContext(MainWrapper);

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
      openSnackbar("Please fill all the forms!");
      return;
    }

    if (login !== localUserData.login || password !== localUserData.password) {
      openSnackbar("Wrong login or password!");
      return;
    }

    setIsLogged(true);
    openSnackbar("User logged in!");
    router.push('/dashlist');
  };

  return (
    <FadeTransition>
      <FormsWrapper>
        <h1>Log on your account</h1>
        <div>
          <input ref={loginRef} type="text" placeholder="Login" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button onClick={loginUser}>Enter</button>
          <button className="return-btn" onClick={() => onLoginState("start")}>
            Return
          </button>
        </div>
      </FormsWrapper>
    </FadeTransition>
  );
}

export default Enter;

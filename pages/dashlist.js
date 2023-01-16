import React, { useContext, useEffect } from "react";
import MainMenu from "../components/MainMenu";
import { MainWrapper } from "../components/Wrapper";
import { useRouter } from "next/router";

function Charlist() {
  const router = useRouter();
  const { isLogged } = useContext(MainWrapper);

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, [isLogged, router]);

  return <MainMenu />;
}

export default Charlist;

import React, { useContext, useEffect } from "react";
import RickJokesPage from "../components/RickJokesPage";
import { MainWrapper } from "../components/Wrapper";
import { useRouter } from "next/router";

function RickJokes() {
  const router = useRouter();
  const { isLogged } = useContext(MainWrapper);

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, [isLogged, router]);

  return <RickJokesPage />;
}

export default RickJokes;

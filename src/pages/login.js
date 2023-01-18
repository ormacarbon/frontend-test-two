import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import { setCookie } from "nookies";
import { withSSRGuest } from "../shared/withSSRGuest";

import {
  FormContainer,
  Button,
  FormPageContainer,
} from "../components/Login/styles";
import { InputContainer } from "../components/Form/styles";
import Logo from "../components/Login/Logo";
import Input from "../components/Form/Input";

function Login() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState();

  const authUser = async (e) => {
    e.preventDefault();
    const session = await axios.post(
      "http://localhost:3000/api/auth/authenticate",
      {
        name,
        password,
      }
    );

    if (!session.data.token) {
      return setError("User invalid");
    }

    setCookie(null, "token", session.data.token, {
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    router.push("/");
  };

  return (
    <FormPageContainer>
      <FormContainer onSubmit={authUser}>
        <Logo />
        <InputContainer>
          <Input
            label="Nome"
            id="name"
            type="text"
            value={name}
            setValue={setName}
            required
          />
        </InputContainer>
        <InputContainer>
          <Input
            label="Senha"
            id="password"
            type="password"
            value={password}
            setValue={setPassword}
            required
          />
        </InputContainer>
        <Button>Entrar</Button>
        {/* <FormFooter>
          <Link href="/register">
            <FormLink>Cadastrar-se</FormLink>
          </Link>
          <Link href="/">
            <FormLink>Voltar</FormLink>
          </Link>
        </FormFooter> */}
      </FormContainer>
    </FormPageContainer>
  );
}

export default Login;

// TODO: Tratamento de erros
// TODO: Vercel
// TODO: Responsividade
// TODO: Consumo de API

export const getServerSideProps = withSSRGuest(() => {
  return {
    props: {},
  };
});

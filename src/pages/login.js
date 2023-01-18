import { useRouter } from "next/router";
import React from "react";
import axios from "axios";

import {
  FormContainer,
  InputContainer,
  Button,
  FormPageContainer,
} from "../components/Login/styles";
import Logo from "../components/Login/Logo";
import Input from "../components/Form/Input";

function Login() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState();

  const authUser = async (e) => {
    e.preventDefault();
    const user = await axios.post(
      "http://localhost:3000/api/users/authenticate",
      {
        name,
        password,
      }
    );

    if (!user.data) {
      return setError("User invalid");
    }
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

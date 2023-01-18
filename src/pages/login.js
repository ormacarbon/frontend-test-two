import React from "react";

import {
  FormContainer,
  InputContainer,
  Button,
  FormPageContainer,
} from "../components/Login/styles";
import Logo from "../components/Login/Logo";
import Input from "../components/Form/Input";

function Login() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <FormPageContainer>
      <FormContainer onSubmit={() => {}}>
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

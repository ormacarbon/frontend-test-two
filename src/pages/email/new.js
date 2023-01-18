import React from "react";
import { useRouter } from "next/router";

import { withSSRAuth } from "../../shared/withSSRAuth";
import { useScene } from "../../hooks/useScene";

import Input from "../../components/Form/Input";
import Layout from "../../components/Layout";
import { Button } from "../../components/Login/styles";
import { InputContainer } from "../../components/Form/styles";
import { validationEmail } from "../../utils/validationEmail";

function NewEmail() {
  const [email, setEmail] = React.useState("");

  const { scenes, setScene } = useScene();
  const router = useRouter();

  const addItemList = () => {
    if (email === "") alert("Preencha o campo!");

    setScene([...scenes, email]);
    router.push("/");
    return;
  };

  return (
    <Layout title="Validation e-mail">
      <InputContainer>
        <Input
          label="DIgite seu e-mail"
          id="name"
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
      </InputContainer>

      <Button onClick={() => validationEmail(email)}>Validar</Button>
    </Layout>
  );
}

export default NewEmail;

export const getServerSideProps = withSSRAuth(() => {
  return {
    props: {},
  };
});

// TODO;

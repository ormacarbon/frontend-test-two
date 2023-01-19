import React from "react";
import { useRouter } from "next/router";

import { withSSRAuth } from "../../shared/withSSRAuth";
import { useScene } from "../../hooks/useScene";

import Input from "../../components/Form/Input";
import Layout from "../../components/Layout";
import { Button } from "../../components/Login/styles";
import { InputContainer } from "../../components/Form/styles";

function NewScene() {
  const [nameScene, setNameScene] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const { scenes, setScene } = useScene();
  const router = useRouter();

  const addItemList = () => {
    if (scenes === "" && phoneNumber === "") alert("Preencha os campos");
    // if (phoneNumber.length !==) alert("Preencha os campos");

    setScene([...scenes, nameScene]);
    router.push("/");
    return;
  };

  return (
    <Layout title="Create scene">
      <InputContainer>
        <Input
          label="Name Scene"
          id="name"
          type="text"
          value={nameScene}
          onChange={({ target }) => setNameScene(target.value)}
          required
        />
      </InputContainer>
      <InputContainer>
        <Input
          label="DDD + Phone Number"
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={({ target }) => setPhoneNumber(target.value)}
          required
        />
      </InputContainer>

      <Button onClick={addItemList}>Salvar</Button>
    </Layout>
  );
}

export default NewScene;

export const getServerSideProps = withSSRAuth(() => {
  return {
    props: {},
  };
});

// TODO;

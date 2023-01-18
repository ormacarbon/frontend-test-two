import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { useScene } from "../../hooks/useScene";

import Layout from "../../components/Layout";

function NewScene() {
  const [valueInputScene, setValueInputScene] = React.useState("");
  const { scenes, setScene } = useScene();
  const router = useRouter();

  const addItemList = () => {
    setScene([...scenes, valueInputScene]);
    router.push("/");
  };

  return (
    <Layout>
      <input
        label="Nome da cena"
        id="name"
        type="text"
        value={valueInputScene}
        onChange={({ target }) => setValueInputScene(target.value)}
        required
      />
      <button onClick={addItemList}>Salvar</button>
      <Link href="/">Voltar</Link>
    </Layout>
  );
}

export default NewScene;

export const getServerSideProps = withSSRAuth(() => {
  return {
    props: {},
  };
});

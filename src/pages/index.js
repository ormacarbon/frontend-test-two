import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

import { useScene } from "../hooks/useScene";

import Layout from "../components/Layout";
import { Item, Ul } from "../components/Home/styles";
import { Flex } from "../styles/global";
import { withSSRAuth } from "../shared/withSSRAuth";

export default function Home() {
  const { scenes, setScene } = useScene();

  const deleteItemList = (item, id) => {
    const newScenes = scenes.filter((sceneItem) => sceneItem !== item);
    setScene([...newScenes]);
  };

  return (
    <Layout title="Home">
      <Ul>
        {scenes &&
          scenes.map((scene, id) => (
            <Item key={id}>
              <span>{scene}</span>
              <Flex direction="row">
                <button>
                  <BiTrash
                    onClick={() => deleteItemList(scene)}
                    color="#f0f0f5"
                  />
                </button>
                <button>
                  <BiEdit color="#f0f0f5" />
                </button>
              </Flex>
            </Item>
          ))}
      </Ul>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const { user } = parseCookies(ctx);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

import Link from "next/link";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

import { useScene } from "../hooks/useScene";

import Layout from "../components/Layout";
import { Item, Ul } from "../components/Home/styles";
import { Flex } from "../styles/global";

export default function Home() {
  const { scenes, setScene } = useScene();

  return (
    <Layout title="Home">
      <Ul>
        {scenes &&
          scenes.map((scene, id) => (
            <Item key={id}>
              <span>{scene}</span>
              <Flex direction="row">
                <button>
                  <BiTrash onClick={() => deleteItemList(scene)} />
                </button>
                <button>
                  <BiEdit />
                </button>
              </Flex>
            </Item>
          ))}
      </Ul>
    </Layout>
  );
}

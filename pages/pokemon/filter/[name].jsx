import Image from "next/image";
import Nav from "../../../components/Nav";

import {
  Content,
  SectionFilter,
  Box,
  InputFilter,
  Button,
  Card,
  ButtonBox,
  Link,
  BoxButtons,
} from "./styles";

import api from "../../../services/api.service";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Filter({ result }) {
  const { isFallback } = useRouter();

  const [filter, setFilter] = useState("");
  const router = useRouter();

  function search() {
    if (filter != "") {
      router.push("/pokemon/filter/" + filter);
    }
  }

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <Content>
      <Nav />
      <SectionFilter>
        <InputFilter
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          type="text"
          placeholder="Ex: Pikachu"
        />
        <Button onClick={() => search()}>search</Button>
      </SectionFilter>
      <Box>
        {result?.data.map((e, key) => {
          return handleCreateCard(e, key);
        })}
      </Box>
      <BoxButtons></BoxButtons>
    </Content>
  );
}

export const handleCreateCard = (data, key) => {
  return (
    <Card key={key}>
      <Image src={data.images.large} alt="card pokemon" width={250} height={350} />
      <ButtonBox>
        <Link href={`/pokemon/character/${data.id}`}>
          <p>view</p>
        </Link>
      </ButtonBox>
    </Card>
  );
};

export async function getStaticPaths() {
  let paths = [
    { params: { name: "pikachu" } },
    { params: { name: "charizard" } },
  ];
  return { paths, fallback: true }
}

export async function getStaticProps(context) {
  const name = context.params.name;
  const data = await api.get(`?q=!name:${name}`);
  return {
    props: {
      result: data,
    },
    revalidate: 10,
  };
}

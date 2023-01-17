import Image from "next/image";
import Nav from "../../components/Nav";

import { Content, Box, Card, ButtonBox, Link, BoxButtons } from "./styles";

import api from "../../services/api.service";

import { useRouter } from "next/router";

export default function Pokemon({ result }) {
  const { isFallback } = useRouter();

  const page = result?.page;
  const totalPage = result?.totalCount / 15;
  const buttons = [1, 2, 3];

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <Content>
      <Nav />
      <Box>{result.data.map((e, key) => handleCreateCard(e, key))}</Box>
      <BoxButtons>
        {buttons.map((e, key) => {
          if (page < 3) {
            return (
              <Link key={key} href={`/pokemon/${e}`}>
                {e}
              </Link>
            );
          } else {
            if (page < totalPage)
              return (
                <Link key={key} href={`/pokemon/${page + e - 2}`}>
                  {page + e - 2}
                </Link>
              );
            else
              return (
                <Link key={key} href={`/pokemon/${page + e - 3}`}>
                  {page + e - 3}
                </Link>
              );
          }
        })}
      </BoxButtons>
    </Content>
  );
}

export const handleCreateCard = (data, key) => {
  return (
    <Card key={key}>
      <Image src={data.images.large} alt="Aqui" width={250} height={350} />
      <ButtonBox>
        <Link href={`/pokemon/character/${data.id}`}>
          <p>view</p>
        </Link>
      </ButtonBox>
    </Card>
  );
};

export async function getStaticPaths() {
  let paths = [{ params: { page: "1" } }, { params: { page: "2" } }];
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const page = context.params.page;
  const data = await api.get(`?page=${page}&pageSize=${15}`);
  return {
    props: {
      result: data,
    },
    revalidate: 10,
  };
}

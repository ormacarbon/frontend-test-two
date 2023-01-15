import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ListArtsPage from "../../../containers/ListArtsPage";
import { getListArts, getNumberArts } from "../../../helper/api";
import { IArt } from "../../../interfaces/art";
import { IPagination } from "../../../interfaces/pagination";

export interface PageProps {
  arts: IArt[];
  pagination: IPagination
}

export default function Page({arts, pagination}: PageProps) {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>
  if (!arts.length) return <div>Página não encontrada</div>

  return <ListArtsPage arts={arts} pagination={pagination}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params.param[0]);

  const artsPerPage = 12;
  const numberOfArts = getNumberArts();
  const nextPage = page + 1;
  const prevPage = page - 1;

  const arts = await getListArts(page);

  const pagination: IPagination = {
    nextPage,
    prevPage,
    artsPerPage,
    numberOfArts
  }
  return {
    props: {arts, pagination},
  }
}

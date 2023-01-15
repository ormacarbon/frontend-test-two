import { GetStaticPaths, GetStaticProps } from "next";
import { ArtPage } from "../../../containers/ArtPage";
import { getAllArts, getArt } from "../../../helper/api";
import { IArt } from "../../../interfaces/art";

export interface DynamicArt {
  art: IArt;
}

export default function DynamicArt ({art}: DynamicArt) {
  return <ArtPage art={art}/>
}


export const getStaticPaths: GetStaticPaths = async () => {
  const arts = await getAllArts();
  return {
    paths: arts.map((art) => ({params: {id: art.objectID.toString()}})),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const art = await getArt(context.params.id);
  return {
    props: {art: art}
  }
}

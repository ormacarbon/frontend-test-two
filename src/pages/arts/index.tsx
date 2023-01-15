import { GetStaticProps } from "next";
import ListArtsPage from "../../containers/ListArtsPage";
import { getAllArts, getListArts } from "../../helper/api";
import { IArt } from "../../interfaces/art";

export interface IListArts {
  arts: IArt[];
}

export default function Art ( {arts}: IListArts) {
  return(<ListArtsPage arts={arts}/>)
}

export const getStaticProps: GetStaticProps = async (context) => {
  const arts = await getAllArts();
  return {
    props: {arts},
  }
}

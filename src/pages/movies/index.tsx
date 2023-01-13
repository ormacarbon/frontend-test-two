import AnotherEntertainment from "../../components/AnotherEntertainment";
import Header from "../../components/Header";
import TopEntertainment from "../../components/TopEntertainment";
import { MainContent } from "../../styles/global";

export default function Movies() {
  return (
    <>
      <Header />
      <MainContent>
        <AnotherEntertainment />
        <TopEntertainment />
      </MainContent>
    </>
  );
}

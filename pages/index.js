import Search from "../components/Search/index";
import Feed from "../components/Feed/index";
import { MainTitle } from "../styles/global";

const Home = () => {
  return (
    <>
      <MainTitle>Explore News and Stand Awake!</MainTitle>
      <Search />
      <Feed />
    </>
  );
};
export default Home;

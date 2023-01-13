import Search from "../components/Search/index";
import Feed from "../components/Feed/index";
import { Title } from "../styles/global";

const Home = () => {
  return (
    <>
      <Title align="center">Explore News and Stand Awake!</Title>
      <Search />
      <Feed />
    </>
  );
};
export default Home;

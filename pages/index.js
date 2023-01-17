import { useState } from "react";

import Search from "../components/Search/index";
import Feed from "../components/Feed/index";
import { Title } from "../styles/global";
import Head from "../helpers/Head";

const Home = () => {
  const [section, setSection] = useState("");

  return (
    <>
      <Head />
      <Title align="center">Explore News and Stand Awake!</Title>
      <Search setSection={setSection} />
      <Feed section={section} />
    </>
  );
};
export default Home;

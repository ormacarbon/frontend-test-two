import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";
import Main from "./main";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #fefae0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

export default function Home() {
  return (
    <Layout>
      {/* <GlobalStyle /> */}
      {/* <div>
        <Leaderboards />
      </div> */}
      <Main />
    </Layout>
  );
}

import Nav from "../components/Nav";

import { Content, Box } from "./styles";

export default function Home() {
  return (
    <Content>
      <Nav />
      <Box>
        <h1>Welcome to our API-based Pokemon card project! 🎮</h1>
      </Box>
    </Content>
  );
}

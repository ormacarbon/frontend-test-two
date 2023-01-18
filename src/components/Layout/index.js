import Header from "../Header";
import Head from "./Head";

import { Container } from "./styles";

function Layout({ title, children }) {
  return (
    <>
      <Head title={title} />
      <Container>
        <Header />
        {children}
      </Container>
    </>
  );
}

export default Layout;

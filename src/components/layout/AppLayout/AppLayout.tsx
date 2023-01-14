import { ReactElement } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { AppContent, Container } from "./app-layout.style";

interface AppLayoutProps {
  children: ReactElement;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Container>
      <Header>My Blog</Header>

      <AppContent>{children}</AppContent>

      <Footer />
    </Container>
  );
};

import { ReactElement } from "react";
import { Header } from "../Header/Header";
import { AppContent, Container } from "./app-layout.style";

interface AppLayoutProps {
  children: ReactElement;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Container>
      <Header>My Blog</Header>

      {/* <Sidebar css={{ gridArea: "sidebar" }} /> */}

      <AppContent>{children}</AppContent>
    </Container>
  );
};
